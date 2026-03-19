import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private api = 'http://localhost:3000/stories';

  constructor(private http: HttpClient) {}

  addStory(data: any) {
    return this.http.post(this.api, data);
  }
}