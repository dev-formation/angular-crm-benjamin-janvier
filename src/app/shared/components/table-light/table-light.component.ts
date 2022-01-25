import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {
  @Input() public collection!: Order[];
  @Input() public headers!: string[];
  
  constructor() { }

  ngOnInit(): void {
    console.log('Init collection', this.collection);
    console.log('Init headers', this.headers);
  }
  
  ngOnChanges(): void {
    console.log('Changes collection', this.collection);
    console.log('Changes headers', this.headers);
  }

}
