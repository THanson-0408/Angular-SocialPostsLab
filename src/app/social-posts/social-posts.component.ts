import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Grand Circus',
      thought: 'Looking to change your future?',
    },
    {
      title: 'Jerry the Snake',
      thought: "I'm a snake",
    },
    {
      title: 'Troy',
      thought: 'Woah Jerry is a snake',
    },
  ];

  showForm: boolean = false;

  constructor() {}

  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  onSubmit(post: Post) {
    this.posts.unshift(post);
    this.toggleForm();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {}
}
