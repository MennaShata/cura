import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseLisingComponent } from './disease-lising.component';

describe('DiseaseLisingComponent', () => {
  let component: DiseaseLisingComponent;
  let fixture: ComponentFixture<DiseaseLisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseaseLisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseLisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
