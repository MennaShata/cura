/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SideEffectEditComponent } from './side-effect-edit.component';

describe('SideEffectEditComponent', () => {
  let component: SideEffectEditComponent;
  let fixture: ComponentFixture<SideEffectEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideEffectEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideEffectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
