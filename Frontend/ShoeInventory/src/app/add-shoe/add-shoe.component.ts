import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Shoe } from '../Models';

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html',
  styleUrls: ['./add-shoe.component.css']
})
export class AddShoeComponent implements OnInit {

  newShoe: FormGroup;
  constructor() { }

  ngOnInit() {

    this.newShoe = new FormGroup({
      name: new FormControl('', [ Validators.required,
         Validators.minLength(3),
         Validators.maxLength(25)]),
      brand: new FormControl('', [Validators.required]),
      price: new FormControl('')
    });
  }

}
