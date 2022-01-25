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
  public collectionPage!: Order[];
  public headersPage: string[];

  private count = 0;
    
    //Demo tableau avec user
  // public collectionUser!: any[];
  // public headersPageUser: string[];
  
  constructor(private orderService: OrdersService) { 
    console.log('****** Constructor');
    this.orderService.collection$.subscribe(
      (data: Order[]) => {
        console.log('Component - order list: ', data);
        this.collectionPage = data;
      }
    )
      //Demo tableau avec User
    // this.orderService.collectionUser$.subscribe(
    //   (data: any) => {
    //     console.log('Component - order list: ', data);
    //     this.collectionUser = data.data;
    //   }
    // )
    // this.headersPageUser = ['#', 'Email', 'Prenom', 'Nom']



    this.headersPage = ['Type Presta', 'Client', 'NbJour', 'TjmHt', 'State', 'Total HT', 'Total TTC'];
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

  public total(val:number, coeff: number, tva?: number ): number {
    if(tva) {
      return val * coeff * (1 + tva / 100)
    } else {
      return val * coeff;
    }
  }

  ngDoCheck() {
    this.count ++;
    console.log('Count : ', this.count);
  }

}
