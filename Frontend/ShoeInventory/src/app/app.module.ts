import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ShoeCardComponent,
    TransactionComponent,
    AddShoeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatSidenavModule, MatIconModule, MatMenuModule,
    HttpModule, MatCardModule, FlexLayoutModule,
     ReactiveFormsModule, MatFormFieldModule,
    AppRoutingModule, MatInputModule, MatSelectModule
  ],
  providers: [ShoesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
