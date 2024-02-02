import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostGridComponent } from './post-grid/post-grid.component';
import { PostService } from './services/post.service';
import { Post } from './models/post.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'angular-app';
  posts: Post[] = [];
  constructor(private postService: PostService){

  }
  ngOnInit(): void {
    console.log('AAAA');
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log('  ttt  ', this.posts);
      
    });
  }
}
