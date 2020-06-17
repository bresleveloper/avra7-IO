import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JLabelSpanComponent } from './j-label-span.component';

describe('JLabelSpanComponent', () => {
  let component: JLabelSpanComponent;
  let fixture: ComponentFixture<JLabelSpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JLabelSpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JLabelSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
