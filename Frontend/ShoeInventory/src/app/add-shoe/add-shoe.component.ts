import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Shoe } from '../Models';
import { ShoesApiService } from '../shoesApi.service';

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html',
  styleUrls: ['./add-shoe.component.css']
})
export class AddShoeComponent implements OnInit {

  newShoe: FormGroup;
  brands;
  constructor(private shoesApi: ShoesApiService) { }

  ngOnInit() {

    this.shoesApi.getBrands().then(result => this.brands = result);

    this.newShoe = new FormGroup({
      name: new FormControl('', [ Validators.required,
         Validators.minLength(3),
         Validators.maxLength(25)]),
      brand: new FormControl('', [Validators.required]),
      price: new FormControl('')
    });
  }

}
