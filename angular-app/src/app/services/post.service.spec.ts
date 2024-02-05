import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environment/enviroments';
import {  MockStore, provideMockStore } from '@ngrx/store/testing';
import { PostService } from './post.service';
import { of } from 'rxjs';
import { Post } from '../models/post.interface';
import { PostState } from '../state/post.state';

describe('PostService', () => {
    let service: PostService;
    let httpClient: HttpClient;
    let store: MockStore;
    const initialState: PostState = {
        posts: [],
        selectedPostId: -1
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PostService, provideMockStore({ initialState }),]
        }).compileComponents();
        store = TestBed.inject(MockStore);
        service = TestBed.inject(PostService);
        httpClient = TestBed.inject(HttpClient);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should send request to get the posts', async () => {
        const postRequestSpy = spyOn(httpClient, 'get');
        const posts = Array.from({ length: 100 }, (_, index) => ({ id: index + 1 } as Post));
        spyOn(store, 'pipe').and.returnValues(of(posts), of(false)); 
        service.getPosts().subscribe();
        expect(postRequestSpy).toHaveBeenCalledWith(environment.apiUrl);
    });
});