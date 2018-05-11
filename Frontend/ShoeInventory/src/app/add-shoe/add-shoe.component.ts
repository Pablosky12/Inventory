import { Component, OnInit, Input } from '@angular/core';

import { Shoe, Brand } from '../Models';
import { ShoesApiService } from '../shoesApi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html',
  styleUrls: ['./add-shoe.component.css']
})
export class AddShoeComponent implements OnInit {

  brands;
  model: Shoe;
  constructor(private shoesApi: ShoesApiService, private route: ActivatedRoute) {
    const lastPath = this.route.snapshot.url.pop().path;
    if (lastPath !== 'add') {
      this.shoesApi.getShoe(lastPath).then( res => this.model = res.json());
    }
  }
  ngOnInit() {
    console.log(this.model);
    if (!this.model) {
      this.model = new Shoe('', 0, new Brand(0, ''), 0, '');
    }
    this.shoesApi.getBrands().then(result => this.brands = result);
  }

  onSubmit(shoe) {
    this.shoesApi.addOrUpdateShoe(shoe.value);
    window.location.href = '/shoes';
  }

}
