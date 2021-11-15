import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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
      emailField: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(10)]],
      amountField: ['', Validators.required],
      termField: ['', Validators.required],
    });
  
  }

  ngOnInit(): void {

  }

  // get f(): { [key: string]: AbstractControl } {
  //   return this.checkoutForm.controls;
  // }

  checkoutPost(){
    console.log(this.checkoutForm.value);
  }

}
