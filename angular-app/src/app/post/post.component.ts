import { Component, Input } from '@angular/core';
import { Post } from '../models/post.interface';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post!: Post | undefined;

  displayContent: string = '';
  propertyRotation: string[] = ['title', 'userId', 'id', 'body'];

  currentPropertyIndex: number = 0;

  constructor() {}

  ngOnInit() {
    this.setDisplayContent();
  }

  toggleContent() {
    this.setDisplayContent();
    this.currentPropertyIndex = (this.currentPropertyIndex + 1) % this.propertyRotation.length;
    console.log('toggleContent if ', this.displayContent);
  }

  setDisplayContent() {
    if (this.post) {
      const currentProperty = this.propertyRotation[this.currentPropertyIndex];
      this.displayContent =
        `${this.post[currentProperty]}` || `No ${currentProperty}`;
    }
  }
}
