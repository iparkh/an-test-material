import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacketGoodComponent } from './backet-good.component';

describe('BacketGoodComponent', () => {
  let component: BacketGoodComponent;
  let fixture: ComponentFixture<BacketGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacketGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacketGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
