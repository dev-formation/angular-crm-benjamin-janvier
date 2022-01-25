import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  public versionNum$ = new BehaviorSubject<number>(0);

  constructor() { }

  public increment(): void {
    this.versionNum$.next(this.versionNum$.value + 1);
  }
}
