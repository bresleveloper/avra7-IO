import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgModelComponent } from './my-ng-model.component';

describe('MyNgModelComponent', () => {
  let component: MyNgModelComponent;
  let fixture: ComponentFixture<MyNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
