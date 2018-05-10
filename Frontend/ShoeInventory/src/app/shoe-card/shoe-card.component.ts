import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ShoesApiService } from '../shoesApi.service';
import { Shoe } from '../Models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrls: ['./shoe-card.component.css']
})
export class ShoeCardComponent {

  @Input() shoe: Shoe;
  routeParams: string;
  constructor(private shoeApi: ShoesApiService) {
  }

  deleteShoe() {
    this.shoeApi.deleteShoe(this.shoe.id);
  }

}
