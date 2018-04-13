import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicinfocomponentComponent } from './musicinfocomponent.component';

describe('MusicinfocomponentComponent', () => {
  let component: MusicinfocomponentComponent;
  let fixture: ComponentFixture<MusicinfocomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicinfocomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicinfocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
