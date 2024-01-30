import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public isVisibleReg:any=false;
  public isVisibleLog:any=false;
  public isDefaultViewVisible: boolean = true;
  onSelect1(){
    this.isVisibleReg=!this.isVisibleReg;
    this.isVisibleLog=false;
    this.isDefaultViewVisible = false;
  }
  onSelect2(){
    this.isVisibleLog=!this.isVisibleLog;
    this.isVisibleReg=false;
    this.isDefaultViewVisible = false;
  }
}
