import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelParentComponent } from './ng-model-parent.component';

describe('NgModelParentComponent', () => {
  let component: NgModelParentComponent;
  let fixture: ComponentFixture<NgModelParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModelParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
