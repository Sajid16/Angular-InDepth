import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  checkoutForm: FormGroup;
  getUserValues = {
    Email: 'sajid.mahboob16@gmail.com',
    amount: 100,
    terms: true,
  };
  emailFSub: Subscription;

  constructor(private formBuilder: FormBuilder) {
    // this.checkoutForm = this.formBuilder.group({
    //   emailField: new FormControl(),
    //   amountField: new FormControl(),
    //   termField: new FormControl(),
    // });

    this.checkoutForm = this.formBuilder.group({
      emailField: [
        '',
        [
          Validators.minLength(5),
          Validators.maxLength(25),
          Validators.required,
          Validators.email,
        ],
      ],
      amountField: ['', Validators.required],
      termField: ['', Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    // valuchanges done inside ngOnInit otherwise it was creating null problem when resetting the form
    // tracking individual fields chnages
    this.emailFSub = this.checkoutForm
      .get('emailField')
      .valueChanges.subscribe((data) => {
        console.log(data);
      });

    // tracking entire form changes

    /* this.emailFSub = this.checkoutForm.valueChanges.subscribe((data) => {
      console.log(data);
    }); */

    // this.setValueFunc();
  }

  get emailField() {
    return this.checkoutForm.get('emailField');
  }

  get amountField() {
    return this.checkoutForm.get('amountField');
  }

  checkoutPost() {
    console.log(this.checkoutForm.value);
    if (this.emailFSub) {
      this.emailFSub.unsubscribe();
    }
    this.resetForm();
  }

  resetForm() {
    this.checkoutForm.reset();
  }

  setValueFunc() {
    this.checkoutForm.setValue({
      emailField: this.getUserValues.Email,
      amountField: this.getUserValues.amount,
      termField: this.getUserValues.terms,
    });
  }

  patchValueFunc() {
    this.checkoutForm.patchValue({
      emailField: this.getUserValues.Email,
      // amountField: this.getUserValues.amount,
      termField: this.getUserValues.terms,
    });
  }
}
