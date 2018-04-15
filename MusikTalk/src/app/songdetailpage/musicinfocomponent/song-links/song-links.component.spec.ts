import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongLinksComponent } from './song-links.component';

describe('SongLinksComponent', () => {
  let component: SongLinksComponent;
  let fixture: ComponentFixture<SongLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
