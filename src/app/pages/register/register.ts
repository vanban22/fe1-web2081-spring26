import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  imports: [ReactiveFormsModule],
  templateUrl: "./register.html",
  styleUrl: "./register.css",
})
export class Register {
  registerForm: FormGroup;

  loading = false;
  error = "";
  success = "";

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
  name: ["", Validators.required],
  email: ["", [Validators.required, Validators.email]],
  password: ["", [Validators.required, Validators.minLength(6)]],
});
  }

  submitForm() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = "";
    this.success = "";

    const data = this.registerForm.value;

    this.http.post("http://localhost:3000/register", data).subscribe({
      next: () => {
        this.loading = false;
        this.success = "Đăng ký thành công";
        this.router.navigateByUrl("/login");
      },
      error: () => {
        this.loading = false;
        
        
        this.error = "Đăng ký thất bại";
      },
    });
  }
}