import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacketGoodListComponent } from './backet-good-list.component';

describe('BacketGoodListComponent', () => {
  let component: BacketGoodListComponent;
  let fixture: ComponentFixture<BacketGoodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacketGoodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacketGoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
