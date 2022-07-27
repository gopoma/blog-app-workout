import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  BASE_URL = "http://localhost:8000";

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get<Post[]>(`${this.BASE_URL}/api/v1/posts`);
  }

  addPost(author: number, title: string, body: string) {
    return this.httpClient.post(`${this.BASE_URL}/api/v1/posts/`, {
      author: author,
      title: title,
      body: body
    });
  }

  deletePost(id: number) {
    return this.httpClient.delete(`${this.BASE_URL}/api/v1/posts/${id}`);
  }

  editPost(id: number | undefined, author: number | undefined, title: string | undefined, body: string | undefined) {
    return this.httpClient.put(`${this.BASE_URL}/api/v1/posts/${id}/`, {
      author: author,
      title: title,
      body: body
    });
  }
}
