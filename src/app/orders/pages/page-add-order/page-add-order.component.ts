import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public newOrder: Order;
  
  constructor(private orderService: OrdersService, private router: Router) {
    this.newOrder = new Order();
   }

  ngOnInit(): void {
  }
  
  public onSubmitted(submittedOrder: Order) {
    console.log('Page new order get form value: ', submittedOrder);
    this.orderService.add(submittedOrder).subscribe(
      (resp: Order) => {
        console.log(resp);
        
        // redirection vers localhost:4200/orders
        this.router.navigate(['orders']); 
      }
    )

  } 

}
