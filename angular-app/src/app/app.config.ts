import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { postsReducer } from './state/reducers/post.reducer';
import { PostsEffects } from './state/effects/post.effect';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(withFetch()),
    provideStoreDevtools(),
    provideStore(),
    provideState({ name: 'posts', reducer: postsReducer }),
    provideEffects(PostsEffects)]
};