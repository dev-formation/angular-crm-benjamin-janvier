import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {
  @Input() public headers!: string[];
  constructor() { }

  ngOnInit(): void {
    console.log('Init headers', this.headers);
  }
  
  ngOnChanges(): void {
    console.log('Changes headers', this.headers);
    console.log('-------on changes : ');
  }

  ngDoCheck(): void {
    console.log('-------do check : ');
  }

  ngAfterContentChecked(): void {
    console.log('-------after Content project: ');
  }
  ngAfterViewChecked(): void {
    console.log('-------Count after View init : ');
  }

}
