import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectSelectedPostId } from '../state/selector/post.selector';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent implements OnInit {
  selectedPostId$!: Observable<number>;
  title: string = '';

  constructor(private readonly store: Store<{ selectedPostId: number }>) {}

  ngOnInit() {
    this.selectedPostId$ = this.store.pipe(select(selectSelectedPostId));

    this.selectedPostId$.pipe(
      tap((id) => {
        // Update title when the selectedPostId changes
        this.title = id > 0 ? `Selected Post ID: ${id}` : 'No Post selected';
      })
    ).subscribe();
  }
}
