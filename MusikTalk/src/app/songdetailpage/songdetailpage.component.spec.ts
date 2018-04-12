import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongdetailpageComponent } from './songdetailpage.component';

describe('SongdetailpageComponent', () => {
  let component: SongdetailpageComponent;
  let fixture: ComponentFixture<SongdetailpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongdetailpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongdetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
