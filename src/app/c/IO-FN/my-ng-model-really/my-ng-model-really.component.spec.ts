import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgModelReallyComponent } from './my-ng-model-really.component';

describe('MyNgModelReallyComponent', () => {
  let component: MyNgModelReallyComponent;
  let fixture: ComponentFixture<MyNgModelReallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgModelReallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgModelReallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
