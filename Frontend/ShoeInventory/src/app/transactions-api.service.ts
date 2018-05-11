import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Transaction } from './Models';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TransactionsApiService {

  private transactions;

  public transactionSubject: BehaviorSubject<Transaction[]> = new BehaviorSubject([]);

  constructor(private http: Http) { }
  private svcUrl = 'http://localhost:3000';

  getTransactions(params: string) {
    const route = this.svcUrl + '/' + params;

    this.http.get(route).subscribe( res => {
      this.transactions = res.json();
      this.transactionSubject.next(this.transactions.reverse());
     },
     err => {console.log('cant get Transactions'); });

    this.transactionSubject.next(this.transactions);
  }

  add(transaction: Transaction) {
    const route = this.svcUrl + '/transactions';
    this.http.post(route, transaction).toPromise();
  }

}
