import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSelectComponentComponent } from './track-select-component.component';

describe('TrackSelectComponentComponent', () => {
  let component: TrackSelectComponentComponent;
  let fixture: ComponentFixture<TrackSelectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackSelectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackSelectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
