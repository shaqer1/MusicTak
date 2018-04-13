import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyWidgetComponent } from './spotify-widget.component';

describe('SpotifyWidgetComponent', () => {
  let component: SpotifyWidgetComponent;
  let fixture: ComponentFixture<SpotifyWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
