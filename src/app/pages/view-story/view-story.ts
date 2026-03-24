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
  imports: [],
  templateUrl: './view-story.html',
  styleUrl: './view-story.css',
})
export class ViewStory implements OnInit {
  stories: Story[] = [];
  loading = false;
  error ='';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Story[]>('http://localhost:3000/stories').subscribe({
      next: (data) => {
        this.stories = data;
      },
error: () => {},
    });
  }

  DeleteStory(id: number) {
    const deleteConfirm=confirm("bạn có chắc muốn xoá")
    if(!deleteConfirm) return
    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: ()=>{
        this.stories =this.stories.filter((story)=>story.id !== id)
        alert("xoá thành công")
      },
      error:()=>{
        alert("xoá thất bại")
      }
    })
  }
}