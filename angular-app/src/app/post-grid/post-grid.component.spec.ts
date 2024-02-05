import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGridComponent } from './post-grid.component';
import { StoreModule } from '@ngrx/store';

describe('PostGridComponent', () => {
  let component: PostGridComponent;
  let fixture: ComponentFixture<PostGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostGridComponent, StoreModule.forRoot({})]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
