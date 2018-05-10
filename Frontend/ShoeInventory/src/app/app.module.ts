import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule
  , MatToolbarModule, MatSidenavModule, MatIconModule,
  MatMenuModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule  } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ShoeCardComponent } from './shoe-card/shoe-card.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ShoesApiService } from './shoesApi.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { ShoegridComponent } from './shoegrid/shoegrid.component';
import { TransactionsGridComponent } from './transactions-grid/transactions-grid.component';
import { TransactionCardComponent } from './transaction-card/transaction-card.component';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ShoeCardComponent,
    TransactionComponent,
    AddShoeComponent,
    ShoegridComponent,
    TransactionsGridComponent,
    TransactionCardComponent,
    EditTransactionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatSidenavModule, MatIconModule, MatMenuModule,
    HttpModule, MatCardModule, FlexLayoutModule,
    FormsModule, MatFormFieldModule,
    AppRoutingModule, MatInputModule, MatSelectModule
  ],
  providers: [ShoesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
