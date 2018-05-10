import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { ShoeCardComponent } from './shoe-card/shoe-card.component';
import { ShoegridComponent } from './shoegrid/shoegrid.component';

const routes: Routes = [
  {path: 'shoes/add', component: AddShoeComponent},
  {path: 'shoes', component: ShoegridComponent},
  {path: 'shoes/:id', component: AddShoeComponent},
  {path: 'shoes/brand/:id', component: ShoegridComponent},
  { path: '',   redirectTo: '/shoes', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:
  [ RouterModule]
})
export class AppRoutingModule {
}
