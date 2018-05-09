import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { ShoeCardComponent } from './shoe-card/shoe-card.component';

const routes: Routes = [
  {path: 'shoes/add', component: AddShoeComponent},
  {path: 'shoes', component: ShoeCardComponent},
  {path: 'shoes/brand/:id', component: ShoeCardComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:
  [ RouterModule]
})
export class AppRoutingModule {
}
