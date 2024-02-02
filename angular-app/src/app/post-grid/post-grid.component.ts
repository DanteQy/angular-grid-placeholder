import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
@Component({
  selector: 'app-post-grid',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './post-grid.component.html',
  styleUrl: './post-grid.component.css'
})
export class PostGridComponent {

}
