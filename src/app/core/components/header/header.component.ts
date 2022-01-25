import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/orders/services/orders.service';
import { Order } from '../../models/order';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public version!: number;
  constructor(private orderService: OrdersService, private versionService: VersionService) {
    this.orderService.subCollection$.subscribe(
      (resp: Order[]) => {
        console.log('Component - header: ', resp);
      }
    )
   }

  ngOnInit(): void {
    this.versionService.versionNum$.subscribe(
      (versionNumResp: number) => {
        this.version = versionNumResp;
      }
    )
  }

}
