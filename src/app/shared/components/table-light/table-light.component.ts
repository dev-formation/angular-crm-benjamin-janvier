import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {
  @Input() public headers!: string[];
  private count = 0;
  private count2 = 0;
  constructor() { }

  ngOnInit(): void {
    console.log('Init headers', this.headers);
  }
  
  ngOnChanges(): void {
    console.log('Changes headers', this.headers);
  }

  ngAfterContentChecked(): void {
    this.count++;
    console.log('-------Count after Content project: ', this.count);
  }
  ngAfterViewChecked(): void {
    this.count2++;
    console.log('-------Count after View init : ', this.count2);
  }

}
