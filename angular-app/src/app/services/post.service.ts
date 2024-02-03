import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/enviroments';
import { Observable, catchError, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<Post[]>(this.apiUrl)
      .pipe(
        (map(posts => posts.map(post => ({ ...post})))),
        (catchError((error) => {
          // Handle the error and optionally log it
          console.error('API Error:', error);
          return throwError(() => error);
        }))
      );
  }
}
