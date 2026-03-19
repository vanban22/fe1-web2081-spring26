import { HttpClient } from '@angular/common/http';
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
  lab5Form: FormGroup;
  error = false;
  errorMessage = '';
  loading = false;
  constructor(private fb: FormBuilder,
    private http: HttpClient,
  ) {
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
    this.lab5Form = this.fb.group({
      title: ['', [Validators.required]],
      author: '',
      views: '',

    })
  }

  submitForm() {
    console.log(this.lab5Form.value);
    this.loading = true;
    this.error = false;

    const data = this.lab5Form.value;
    this.http.post('http://localhost:3000/stories', data).subscribe({
      next: () => {
        alert("them thanh cong")
        this.loading = false
        this.lab5Form.reset();
      },
      error: (err) => {
        this.errorMessage = "Có lỗi xảy ra";
        this.loading = false
        this.error = true
      }
    })
  }
  submitProduct() {
    this.loading = true;
    this.error = false;

    const data = this.bai1Form.value;
    this.http.post('http://localhost:3000/product', data).subscribe({
      next: () => {
        alert("them thanh cong")
        this.loading = false
        this.bai1Form.reset();
      },
      error: (err) => {
        this.errorMessage = "Có lỗi xảy ra";
        this.loading = false
        this.error = true
      }
    })
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
  get title() {
    return this.lab5Form.get('title')
  }
}
