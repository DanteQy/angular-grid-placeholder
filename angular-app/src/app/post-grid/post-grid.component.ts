import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../models/post.interface';
import {
  selectPostsList,
  selectPostIsLoading,
} from '../state/selector/post.selector';

@Component({
  selector: 'app-post-grid',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './post-grid.component.html',
  styleUrl: './post-grid.component.css',
})
export class PostGridComponent {
  posts$!: Observable<Post[]>;
  isLoading$!: Observable<boolean>;

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.posts$ = this.store.pipe(select(selectPostsList));
    this.isLoading$ = this.store.pipe(select(selectPostIsLoading));
  }
}
