import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',

})
export class AddStory {
  addForm: FormGroup;
  bai1Form: FormGroup;
  bai2Form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      title: '',
      author: '',
      views: '',

    })
    this.bai1Form = this.fb.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.min(0)]],
      category: ['',]
    })
    this.bai2Form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submitForm() {
    console.log(this.addForm.value);
  }
  get name() {
    return this.bai1Form.get('name');
  }
  get price() {
    return this.bai1Form.get('price');
  }
  get username() {
    return this.bai2Form.get('username');
  }
  get email() {
    return this.bai2Form.get('email');
  }
  get password() {
    return this.bai2Form.get('password');
  }
}
