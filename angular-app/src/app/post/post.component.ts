import { Component, Input } from '@angular/core';
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
export class PostComponent {
  @Input() post!: Post | undefined;
  selectedPostId$!: Observable<number>;

  displayContent: string = '';
  propertyRotation: string[] = ['title', 'userId', 'id', 'body'];

  currentPropertyIndex: number = 0;

  constructor(private store: Store<{ selectedPostId: number }>) {}

  ngOnInit() {
    this.setDisplayContent();
  }

  

  toggleContent() {
    if(this.post) {
      this.store.dispatch(setData({ selectedPostId: this.post.id }));

      this.selectedPostId$ = this.store.pipe(select('selectedPostId'));
      this.currentPropertyIndex = (this.currentPropertyIndex + 1) % this.propertyRotation.length;
      this.setDisplayContent();

    }

    console.log('toggleContent if ', this.displayContent);
  }

  setDisplayContent() {
    if (this.post) {
      const currentProperty = this.propertyRotation[this.currentPropertyIndex];
      this.displayContent =
        `${this.post[currentProperty]}` || `No ${currentProperty}`;
    }
  }

  selectPostOnClick() {
    // this.store.dispatch(selectSelectedPostId(this.post?.id));
  }
}
