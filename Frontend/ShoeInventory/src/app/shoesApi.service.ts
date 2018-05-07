import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Shoe, Transaction } from './Models';

@Injectable()
export class ShoesApiService {

  constructor(private http: Http) { }
  private svcUrl = 'http://localhost:3000/shoes';

  getAllShoes(): Observable<Shoe[]> {
    return this.http.get(this.svcUrl).map((shoe: Response) => shoe.json());
  }


}
