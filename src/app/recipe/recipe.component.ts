import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formSubmit(formData:NgForm){
    console.log(formData.value);
    console.log(formData);
    console.log(formData);
  }

}
