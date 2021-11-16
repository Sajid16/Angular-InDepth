import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  checkoutForm: FormGroup;
  // submitted = false;

  constructor(private formBuilder: FormBuilder) {
    
    // this.checkoutForm = this.formBuilder.group({
    //   emailField: new FormControl(),
    //   amountField: new FormControl(),
    //   termField: new FormControl(),
    // });
    this.checkoutForm = this.formBuilder.group({
      emailField: ['', [Validators.minLength(5), Validators.maxLength(10), Validators.required, Validators.email]],
      amountField: ['', Validators.required],
      termField: ['', Validators.requiredTrue],
    });
  
  }

  ngOnInit(): void {

  }

  get emailField() {
    return this.checkoutForm.get('emailField');
  }

  get amountField() {
    return this.checkoutForm.get('amountField');
  }

  checkoutPost(){
    console.log(this.checkoutForm.value);
  }

}
