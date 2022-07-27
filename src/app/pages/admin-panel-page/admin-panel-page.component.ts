import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.css']
})
export class AdminPanelPageComponent implements OnInit {
  isEditing = false;
  currentEditPostId: number | undefined;
  editAuthorContent: number | undefined;
  editTitleContent: string | undefined;
  editBodyContent: string | undefined;
  posts: Post[] | undefined;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {this.posts = data;});
  }

  addPost(author: any, title: any, body: any) {
    this.postService.addPost(author.value, title.value, body.value).subscribe((post:any) => {
      this.posts?.push(post);
    });
    return false;
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      this.posts = this.posts?.filter(post => post.id !== id);
    });
  }

  showEditForm(post: Post) {
    this.isEditing = true;
    this.editAuthorContent = post.author;
    this.editTitleContent = post.title;
    this.editBodyContent = post.body;
    this.currentEditPostId = post.id;
  }

  editPost() {
    return this.postService.editPost(
      this.currentEditPostId,
      this.editAuthorContent,
      this.editTitleContent,
      this.editBodyContent
    ).subscribe((postEdited:any) => {
      if(this.posts) {
        for(let i = 0; i < this.posts.length; i++) {
          if(this.posts[i].id === postEdited.id) {
            this.posts[i] = postEdited;
            break;
          }
        }
      }
    });
  }
}
