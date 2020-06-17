import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JPageComponent } from './j-page.component';

describe('JPageComponent', () => {
  let component: JPageComponent;
  let fixture: ComponentFixture<JPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
