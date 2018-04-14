import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsCompComponent } from './comments-comp.component';

describe('CommentsCompComponent', () => {
  let component: CommentsCompComponent;
  let fixture: ComponentFixture<CommentsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
