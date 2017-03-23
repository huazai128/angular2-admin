import { Component,ViewEncapsulation } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableServer } from "./smartTable.server";

import "style-loader!./smartTable.scss";

@Component({
  selector:"app-smart-table",
  encapsulation:ViewEncapsulation.None,  //encapsulation:对样式的隔离，none:不隔离父组件样式和子组件样式，这样相同的样式会覆盖前面的，Native：用于隔离父组件和子组件的样式，这样样式相同也不会影响
  templateUrl:"./smartTable.html"
})

export class SmartTable{
  query:string = '';
  setting = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate:true
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave:true
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      firstName: {
        title: 'First Name',
        type: 'string'
      },
      lastName: {
        title: 'Last Name',
        type: 'string'
      },
      username: {
        title: 'Username',
        type: 'string'
      },
      email: {
        title: 'E-mail',
        type: 'string'
      },
      age: {
        title: 'Age',
        type: 'number'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private  _service:SmartTableServer){
    this._service.getData().then((data) => {
      this.source.load(data);
    })
  }

  //删除
  onDeleteConfirm(event):void{
    console.log(event);
    if(window.confirm("Are you sure you want to delete?")){
      event.confirm.resolve();
    }else{
      event.confirm.reject();
    }
  }

  //编辑
  onEditConfirm(event):void{
    console.log(event)
  }

  //增加
  onAdd(event):void{
    console.log(event)
  }
}
