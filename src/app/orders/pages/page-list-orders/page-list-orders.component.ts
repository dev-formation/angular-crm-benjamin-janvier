import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public titleComponent: { content: string} = { content: 'List Order'};
  constructor(private orderService: OrdersService) { 
    console.log('****** Constructor');
    // this.orderService.collection$.subscribe(
    //   (resp: Order[]) => {
    //     console.log('Component - order list: ', resp);
    //   }
    // )

    this.orderService.subCollection$.subscribe(
      (resp: Order[]) => {
        console.log('Component - order list: ', resp);
      }
    )
  }

  ngOnInit(): void {
    console.log('****** On Init');
  }

  public onClickInitTitle(): void {
    this.titleComponent = { content : 'Other title' };
  }

  ngOnDestroy(): void {
    console.log('****** On Destroy');
  }

}
