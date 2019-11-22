import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStylesButtonComponent } from './change-styles-button.component';

describe('ChangeStylesButtonComponent', () => {
  let component: ChangeStylesButtonComponent;
  let fixture: ComponentFixture<ChangeStylesButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeStylesButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStylesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
