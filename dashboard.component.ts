import { Component, OnInit } from '@angular/core';
import { LISTS } from '../mock-lists';
import { List } from '../list';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

lists=LISTS;

selectedList:List;
constructor() { }
  ngOnInit() {
  }

onSelect(list:List):void{
  this.selectedList=list;
}
}
  
