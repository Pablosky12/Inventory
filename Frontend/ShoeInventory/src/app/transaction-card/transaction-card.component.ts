import { Component, OnInit } from '@angular/core';
import { TransactionsApiService } from '../transactions-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css']
})
export class TransactionCardComponent implements OnInit {

  routeParams: string;

  transactions;


  constructor(private transactionApi: TransactionsApiService,
     private route: ActivatedRoute, private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      };
   }

   ngOnInit() {
    this.routeParams = this.route.snapshot.url.map(segment => segment.path)
    .reduce((prev, curr) => prev + '/' + curr);

    this.route.paramMap.subscribe(() => this.transactionApi.getTransactions(this.routeParams));

    this.transactionApi.transactionSubject.subscribe(response => this.transactions = response);
  }

}
