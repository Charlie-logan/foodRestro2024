import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { foodList } from '../Model/foods';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  public foodList:any=[];

  ngOnInit(): void {
      this.foodList=foodList.getFoods();
  }

  @ViewChild('t1')
  myElementRef: ElementRef | undefined;
  onSelect(fObj:any,t1:any){
    this.myElementRef?.nativeElement.classList.toggle('selected');
  }
}
