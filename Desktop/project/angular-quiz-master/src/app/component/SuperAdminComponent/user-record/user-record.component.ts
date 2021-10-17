import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Subscriber } from 'rxjs';
import { SuperAdminserviceService } from 'src/app/services/super-adminservice.service';

@Component({
  selector: 'app-user-record',
  templateUrl: './user-record.component.html',
  styleUrls: ['./user-record.component.css']
})
export class UserRecordComponent implements OnInit {
  data:any
  mysuperAdminserviceService!:SuperAdminserviceService
  defaultColDef={editable: true};
  columnDefs: ColDef[] = [
    { field: 'userId', sortable: true, filter: true ,editable:false},
    { field: 'name', sortable: true, filter: true },
    { field: 'email', sortable: true, filter: true},
    {
      headerName: "action",
      minWidth: 150,
      cellRenderer: this.actionCellRenderer,
      editable: false,
      colId: "action"
    }
];

rowData = [
   
];


  constructor( superAdminserviceService:SuperAdminserviceService) {
    this.mysuperAdminserviceService=superAdminserviceService;
   
   }

  ngOnInit(): void {

    this.mysuperAdminserviceService.getAlluser().subscribe(data=>{
      this.data=data;
      this.rowData=data.data;
      console.log("constructor");
      console.log(this.data.data);
    })
    
  }

  onEditButtonClick(params:any)
{
 console.log(params);
}


//on click method 
onCellClicked(params:any) {
  // Handle click event for action cells
  if (params.column.colId === "action" && params.event.target.dataset.action) {
    let action = params.event.target.dataset.action;

    if (action === "edit") {
      params.api.startEditingCell({
        rowIndex: params.node.rowIndex,
        colKey: params.columnApi.getDisplayedCenterColumns()[0].colId
      });
    }

    if (action === "delete") {
 
      this.mysuperAdminserviceService.deleteUserById(params.data.userId).subscribe(data=>{
            console.log(data);
            this.ngOnInit();
            
      })
       console.log(params.data.userId);
      
    }

    if (action === "update") {
      console.log(params.data);
      params.api.stopEditing(false);
    }

    if (action === "cancel") {
      params.api.stopEditing(true);
    }
  }
}


////////////////////////////on click method end /////////////////////////////////////////////

onRowEditingStarted(params:any) {
  params.api.refreshCells({
    columns: ["action"],
    rowNodes: [params.node],
    force: true
  });
}
onRowEditingStopped(params:any) {
  
  params.api.refreshCells({
    columns: ["action"],
    rowNodes: [params.node],
    force: true
  });
}




actionCellRenderer(params:any) {
  let eGui = document.createElement("div");

  let editingCells = params.api.getEditingCells();
  // checks if the rowIndex matches in at least one of the editing cells
  let isCurrentRowEditing = editingCells.some((cell:any) => {
    return cell.rowIndex === params.node.rowIndex;
  });

  if (isCurrentRowEditing) {
    eGui.innerHTML = `
<button  class="action-button update"  data-action="update"> update  </button>
<button  class="action-button cancel"  data-action="cancel" > cancel </button>
`;
  } else {
    eGui.innerHTML = `
<button class="action-button edit"  data-action="edit" > edit  </button>
<button class="action-button delete" data-action="delete" > delete </button>
`;
  }

  return eGui;
}

}