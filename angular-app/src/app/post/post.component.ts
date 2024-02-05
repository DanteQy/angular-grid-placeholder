import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.interface';
import { Store, select } from '@ngrx/store';
import { setData } from '../state/actions/post.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post!: Post | undefined;
  selectedPostId$!: Observable<number>;

  displayContent: string = '';
  propertyRotation: string[] = ['title', 'userId', 'id', 'body'];

  currentPropertyIndex: number = 0;

  constructor(
    private store: Store<{ selectedPostId: number }>,
    private cdr: ChangeDetectorRef
  ) {}

  /**
   * Sets up the initial display content.
   */
  ngOnInit() {
    this.setDisplayContent();
  }

  /**
   * Toggles the content to the next property in rotation.
   * Dispatches an action to set the selected post ID.
   */
  toggleContent() {
    if (this.post) {
      this.store.dispatch(setData({ selectedPostId: this.post.id }));

      this.selectedPostId$ = this.store.pipe(select('selectedPostId'));
      this.currentPropertyIndex =
        (this.currentPropertyIndex + 1) % this.propertyRotation.length;
      this.setDisplayContent();
    }
  }

  /**
   * Readies the content to be displayed based on the current rotation index
   */
  setDisplayContent() {
    if (this.post) {
      const currentProperty = this.propertyRotation[this.currentPropertyIndex];
      this.displayContent =
        `${this.post[currentProperty]}` || `No ${currentProperty}`;
    }
  }

  /**
   * function to be called from father component to reset to default condition when unselected
   */
  resetToDefault(): void {
    // Check if already in the default state before resetting
    if (this.currentPropertyIndex !== 0) {
      this.currentPropertyIndex = 0;
      this.setDisplayContent();
      this.cdr.detectChanges();
    }
  }
}
