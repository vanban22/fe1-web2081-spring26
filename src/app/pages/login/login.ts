import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  form: FormGroup;
  error = '';
  user:any=null
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    this.http.post('http://localhost:3000/login', this.form.value).subscribe({
      next: (data: any) => {
        alert('thành công');
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.user = data.user;
      },
      error: () => {
        this.error = ("đki that bai")
      }
    });
    
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.user = null;
    this.form.reset();
  }
  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }
}
