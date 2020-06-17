import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JDetailsComponent } from './j-details.component';

describe('JDetailsComponent', () => {
  let component: JDetailsComponent;
  let fixture: ComponentFixture<JDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
