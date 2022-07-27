import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post | undefined;
  amountLikes: number = 0;

  constructor() { }

  ngOnInit(): void { }

  increaseLikeAmountByOne() {
    this.amountLikes++;
  }
}
