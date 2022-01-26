import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public order$!: Observable<Order>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router ) { 
    this.activatedRoute.paramMap.subscribe(
      (params: any) => {
        console.log(params.get('id'));
        const orderId = Number(params.get('id'))
        this.order$ = this.ordersService.getById(orderId);
      }
    )
  }

  ngOnInit(): void {
  }

  public onSubmitUpdate(orderToUpdate: Order) {
    this.ordersService.update(orderToUpdate).subscribe(
      () => {
        this.router.navigate(['orders']);
      }
    )
  }

}
