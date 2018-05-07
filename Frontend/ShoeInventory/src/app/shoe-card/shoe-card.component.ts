import { Component, OnInit } from '@angular/core';
import { ShoesApiService } from '../shoesApi.service';
import { Shoe } from '../Models';

@Component({
  selector: 'app-shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrls: ['./shoe-card.component.css']
})
export class ShoeCardComponent implements OnInit {

  shoes;
  constructor(private shoeApi: ShoesApiService) { }

  ngOnInit() {
    this.shoeApi.getAllShoes().subscribe((shoes) => {this.shoes = shoes; console.log(shoes); });
  }

}
