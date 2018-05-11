import { Component, OnInit, Inject } from '@angular/core';
import { Shoe, Transaction } from '../Models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TransactionsApiService } from '../transactions-api.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  shoe: Shoe;
  constructor(private transactionsApi: TransactionsApiService,
     private dialogRef: MatDialogRef<TransactionComponent>, @Inject(MAT_DIALOG_DATA) data: Shoe) {
    this.shoe = data;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
  save(transaction) {
    const transactionDto = new Transaction((this.shoe.price * transaction.value.ammount),
    0, transaction.value.ammount, this.shoe.id, this.shoe.codename, transaction.value.operation);
    this.close();
    this.transactionsApi.add(transactionDto);
  }

}
