import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapeComponent } from './grape.component';

describe('GrapeComponent', () => {
  let component: GrapeComponent;
  let fixture: ComponentFixture<GrapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
