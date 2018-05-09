import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Shoe, Transaction } from './Models';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShoesApiService {

  private shoes;

  public shoeSubject: BehaviorSubject<Shoe[]> = new BehaviorSubject([]);


  constructor(private http: Http) {
    this.getShoes('shoes');
  }
  private svcUrl = 'http://localhost:3000';

  getShoes(params: string) {
    const route = this.svcUrl + '/' + params;

    this.http.get(route).subscribe( res => {
      this.shoes = res.json();
      this.shoeSubject.next(this.shoes);
     },
     err => {console.log('cant get shoes'); });
    this.shoeSubject.next(this.shoes);
  }

   getBrands() {
    const route = this.svcUrl + '/brand';

    return this.http.get(route).toPromise().then(res => res.json());
  }
}
