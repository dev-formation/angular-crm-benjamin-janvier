import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$: Observable<Order[]>;
  public subCollection$ = new Subject<Order[]>()
  private urlApi: string = environment.urlApi;

  /**
   * 
   * Test Demo Observable froid
   */

  private obs$ = new Observable((list) => {
    list.next(Math.random())
  })

  /**
   * 
   * Test Demo Observable chaud
   */
  private sub1$ = new Subject<string>();
  private behav$ = new BehaviorSubject<string>('Vidéo 0');

  
  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`);
    
    this.http.get<Order[]>(`${this.urlApi}/orders`).subscribe(
      (resp: Order[]) => {
        this.subCollection$.next(resp);
      }
    )



    /**
     * 
     * Test Demo Observable froid
     */
    this.obs$.subscribe(resp => console.log('Observer 1', resp));
    this.obs$.subscribe(resp => console.log('Observer 2', resp));
    this.obs$.subscribe(resp => console.log('Observer 3', resp));

    /**
     * 
     * Test Demo Observable chaud
     */
    // Subject
    this.sub1$.subscribe(resp => console.log('Abonné 1 Sub : ', resp));
    this.sub1$.subscribe(resp => console.log('Abonné 2 Sub : ', resp));
    
    this.sub1$.next('Newletter janvier');
    
    this.sub1$.subscribe(resp => console.log('Abonné 3 Sub : ', resp));

    this.sub1$.next('Newletter fevrier');

    // Behavior Subject
    this.behav$.subscribe(resp => console.log('Abonné 1 Behav : ', resp));
    
    this.behav$.next('Vidéo 1');
    
    this.behav$.subscribe(resp => console.log('Abonné 2 Behav : ', resp));
    
    this.behav$.next('Vidéo 2');

  }
}
