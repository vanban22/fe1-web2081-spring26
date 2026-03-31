import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Story {
  id: number;
  name: string;
  price: number;
  category: string;
  author: string;
  views: number;
  image: string;
}

@Component({
  selector: 'app-view-story',
  standalone: true,
  imports: [],
  templateUrl: './view-story.html',
  styleUrl: './view-story.css',
})
export class ViewStory implements OnInit {
  stories: Story[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loading = true;
    this.error = '';

    this.http.get<Story[]>('http://localhost:3000/stories').subscribe({
      next: (data) => {
        console.log('DATA API:', data);
        this.stories = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('LỖI API:', err);
        this.error = 'Không tải được dữ liệu';
        this.loading = false;
      },
    });
  }

  DeleteStory(id: number) {
    const deleteConfirm = confirm('bạn có chắc muốn xoá');
    if (!deleteConfirm) return;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        alert('xoá thành công');
      },
      error: () => {
        alert('xoá thất bại');
      }
    });
  }
}