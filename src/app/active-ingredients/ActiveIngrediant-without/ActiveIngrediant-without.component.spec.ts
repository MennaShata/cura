/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActiveIngrediantWithoutComponent } from './ActiveIngrediant-without.component';

describe('ActiveIngrediantWithoutComponent', () => {
  let component: ActiveIngrediantWithoutComponent;
  let fixture: ComponentFixture<ActiveIngrediantWithoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveIngrediantWithoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveIngrediantWithoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
