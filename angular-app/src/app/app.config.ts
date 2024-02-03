import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { postsReducer } from './state/reducers/post.reducer';
import { PostsEffects } from './state/effects/post.effect';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(withFetch()),
    provideStore({
      posts: postsReducer
    }),
    provideEffects([PostsEffects]),
    provideStore()]
};