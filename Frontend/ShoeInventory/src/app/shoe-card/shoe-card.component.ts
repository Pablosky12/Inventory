import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ShoesApiService } from '../shoesApi.service';
import { Shoe } from '../Models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrls: ['./shoe-card.component.css']
})
export class ShoeCardComponent implements OnInit {

  shoes;
  routeParams: string;

  constructor(private shoeApi: ShoesApiService, private route: ActivatedRoute, private router: Router) {

    // Since components are reused by default on angular, change the behavior to
    // update the urrent component  on route change, so onInit gets triggered every time
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };

   }

  ngOnInit() {
    this.routeParams = this.route.snapshot.url.map(segment => segment.path)
    .reduce((prev, curr) => prev + '/' + curr);

    this.route.paramMap.subscribe(() => this.shoeApi.getShoes(this.routeParams));

    this.shoeApi.shoeSubject.subscribe(shoes => this.shoes = shoes);
  }

}
