import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-story',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-story.html',
  styleUrl: './edit-story.css',
})
export class EditStory {
  id: any;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID', this.id);
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      quantity: [''],
      coverImage: [''],
      genre: [''],
      author: [''],
      views: ['']
    });
  }

  ngOnInit() {
    this.http.get(`http://localhost:3000/books/${this.id}`).subscribe({
      next: (data: any) => {
        console.log(data);
        this.editForm.patchValue(data);
      },
    });
  }

  submitForm() {
    console.log(this.editForm.value);
    this.http.patch(`http://localhost:3000/books/${this.id}`, this.editForm.value).subscribe({
      next: () => {
        alert('thành công');
        this.router.navigate(["/list"])
      },
      error: (err) => {
        console.log(err);
        let message = 'Có lỗi xảy ra!';
        if (err.error) {
          message = err.error.message || JSON.stringify(err.error);
        }
        alert(message);
      },
    });
  }
}