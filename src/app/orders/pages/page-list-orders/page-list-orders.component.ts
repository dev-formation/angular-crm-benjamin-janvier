import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { VersionService } from 'src/app/core/services/version.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public titleComponent: { content: string} = { content: 'List Order'};
  public collectionPage$!: Observable<Order[]>;
  public versionNum$!: BehaviorSubject<number>;
  public headersPage: string[];

  private count = 0;
  private sub!: Subscription;
    
    //Demo tableau avec user
  // public collectionUser!: any[];
  // public headersPageUser: string[];
  
  constructor(private orderService: OrdersService, private versionService: VersionService) { 
    // console.log('****** Constructor');
    // this.orderService.collection$.subscribe(
    //   (data: Order[]) => {
    //     console.log('Component - order list: ', data);
    //     this.collectionPage = data;
    //   }
    // )

    this.collectionPage$ = this.orderService.collection$;

    this.headersPage = ['Type Presta', 'Client', 'NbJour', 'TjmHt', 'State', 'Total HT', 'Total TTC'];
      //Demo tableau avec User + experiment mapping
    // this.orderService.collectionUser$.subscribe(
    //   (data: any) => {
    //     console.log('Component - order list: ', data);
    //   }
    // )
    // this.headersPageUser = ['#', 'Email', 'Prenom', 'Nom']

    // Test unsubscribe sur behavior subject
    // this.sub = this.versionService.versionNum$.subscribe(
    //   (version: number) => console.log('Recpetion numero version behav', version)  
    // );
    this.versionNum$ = this.versionService.versionNum$;
    
  }

  ngOnInit(): void {
    // console.log('****** On Init');
  }

  public onClickInitTitle(): void {
    this.titleComponent = { content : 'Other title' };
  }

  ngOnDestroy(): void {
    // console.log('****** On Destroy');
    // this.sub.unsubscribe();
  }

  public total(val:number, coeff: number, tva?: number ): number {
    this.count ++;
    console.log('Count : ', this.count);
    if(tva) {
      return val * coeff * (1 + tva / 100)
    } else {
      return val * coeff;
    }
  }

}
