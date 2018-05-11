import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { ShoeCardComponent } from './shoe-card/shoe-card.component';
import { ShoegridComponent } from './shoegrid/shoegrid.component';
import { TransactionCardComponent } from './transaction-card/transaction-card.component';

const routes: Routes = [
  { path: '',   redirectTo: '/shoes', pathMatch: 'full' },
  {path: 'shoes', component: ShoegridComponent},
  {path: 'shoes/:id', component: AddShoeComponent},
  {path: 'shoes/brand/:id', component: ShoegridComponent},
  {path: 'shoes/add', component: AddShoeComponent},
  { path: 'transactions', component: TransactionCardComponent },
  { path: 'transactions/:type', component: TransactionCardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:
  [ RouterModule]
})
export class AppRoutingModule {
}
