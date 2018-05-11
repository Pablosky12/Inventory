import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ShoesApiService } from '../shoesApi.service';
import { Shoe } from '../Models';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogConfig } from '@angular/material';
import { TransactionComponent } from '../transaction/transaction.component';


@Component({
  selector: 'app-shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrls: ['./shoe-card.component.css']
})
export class ShoeCardComponent {

  @Input() shoe: Shoe;
  routeParams: string;
  constructor(private shoeApi: ShoesApiService, public dialog: MatDialog) {
  }

  deleteShoe() {
    this.shoeApi.deleteShoe(this.shoe.id);
  }
  openTransaction() {
    const transactionDialogConfig = new MatDialogConfig();

    transactionDialogConfig.disableClose = true;
    transactionDialogConfig.autoFocus = true;
    transactionDialogConfig.width = '20%';
    transactionDialogConfig.height = '300px';
    transactionDialogConfig.data = this.shoe;

    this.dialog.open(TransactionComponent, transactionDialogConfig);
  }


}
