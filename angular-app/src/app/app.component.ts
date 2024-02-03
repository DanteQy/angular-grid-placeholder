import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Post } from './models/post.interface';
import { Store, select } from '@ngrx/store';
import { PostGridComponent } from './post-grid/post-grid.component';
import {
  selectPostsList,
  selectPostIsLoading,
} from './state/selector/post.selector';
import { getPosts } from './state/actions/post.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostGridComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  posts$!: Observable<Post[]>;
  isLoading$!: Observable<boolean>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions();
    console.log('---', this.posts$);
  }

  private initDispatch(): void {
    this.store.dispatch(getPosts());
  }

  private initSubscriptions(): void {
    this.posts$ = this.store.pipe(select(selectPostsList));

    this.isLoading$ = this.store.pipe(select(selectPostIsLoading));
  }
}
