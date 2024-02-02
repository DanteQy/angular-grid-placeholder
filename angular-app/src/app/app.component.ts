import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostGridComponent } from './post-grid/post-grid.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
