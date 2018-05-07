import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShoeComponent } from './add-shoe/add-shoe.component';

const routes: Routes = [
  {path: 'shoes/new', component: AddShoeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:
  [ RouterModule]
})
export class AppRoutingModule {
}
