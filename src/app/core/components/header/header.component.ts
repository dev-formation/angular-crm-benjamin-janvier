import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/orders/services/orders.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private orderService: OrdersService) {
    this.orderService.subCollection$.subscribe(
      (resp: Order[]) => {
        console.log('Component - header: ', resp);
      }
    )
   }

  ngOnInit(): void {
  }

}
