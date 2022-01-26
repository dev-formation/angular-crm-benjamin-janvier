import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { User } from 'src/app/core/models/userTest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$: Observable<Order[]>;
  public collectionUser$!: Observable<any[]>;
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

    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map((tab: any[]) => {
        console.log(tab);
        return tab.map((obj: any) => {
          return new Order(obj);
        })
      })
    );
      // Experiment API publique mapping 
    // this.collectionUser$ = this.http.get<any[]>('https://reqres.in/api/users?page=1').pipe(
    //   map((dataBrute: any) => {
    //     console.log('Data brute : ', dataBrute);
    //     return dataBrute.data.map((objBrut: any) => {
    //       return new User(objBrut.email, objBrut.first_name,objBrut.last_name, objBrut.id)
    //     })
    //   })
    // );
    
    this.http.get<Order[]>(`${this.urlApi}/orders`).subscribe(
      (resp: Order[]) => {
        this.subCollection$.next(resp);
      }
    )



    /**
     * 
     * Test Demo Observable froid
     */
    // this.obs$.subscribe(resp => console.log('Observer 1', resp));
    // this.obs$.subscribe(resp => console.log('Observer 2', resp));
    // this.obs$.subscribe(resp => console.log('Observer 3', resp));

    /**
     * 
     * Test Demo Observable chaud
     */
    // Subject
    // this.sub1$.subscribe(resp => console.log('Abonné 1 Sub : ', resp));
    // this.sub1$.subscribe(resp => console.log('Abonné 2 Sub : ', resp));
    
    // this.sub1$.next('Newletter janvier');
    
    // this.sub1$.subscribe(resp => console.log('Abonné 3 Sub : ', resp));

    // this.sub1$.next('Newletter fevrier');

    // Behavior Subject
    // this.behav$.subscribe(resp => console.log('Abonné 1 Behav : ', resp));
    
    // this.behav$.next('Vidéo 1');
    
    // this.behav$.subscribe(resp => console.log('Abonné 2 Behav : ', resp));
    
    // this.behav$.next('Vidéo 2');

  }
}
