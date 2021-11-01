import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
    this.checkoutForm = this.formBuilder.group({
      emailField: new FormControl(),
      amountField: new FormControl(),
      termField: new FormControl(),
    });
  
  }

  ngOnInit(): void {

  }

  checkoutPost(){
    console.log(this.checkoutForm.value);
  }

}
