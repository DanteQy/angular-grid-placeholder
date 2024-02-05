import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../models/post.interface';
import {
  selectPostsList
} from '../state/selector/post.selector';

@Component({
  selector: 'app-post-grid',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './post-grid.component.html',
  styleUrl: './post-grid.component.css',
})
export class PostGridComponent implements OnInit{
  @ViewChildren(PostComponent) postComponents!: QueryList<PostComponent>;
  posts$!: Observable<Post[]>;
  private previousPostId: number | null = null;

  constructor(private readonly store: Store, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.posts$ = this.store.pipe(select(selectPostsList));
  }

  resetPreviousPost(e: Event, postId: number): void {
    e.preventDefault();
    // Find the PostComponent for the previous post
    const previousPostComponent = this.postComponents.find(
      (component) => component.post?.id === this.previousPostId
    );
    
    // Reset the previous post if found
    if (previousPostComponent && (this.previousPostId !== postId)) {
      previousPostComponent.resetToDefault();
      this.cdr.detectChanges();
      this.cdr.markForCheck();
    }

    // Update the previous post ID with the current post ID
    this.previousPostId = postId;
  }
}
