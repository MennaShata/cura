/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SideEffectAddComponent } from './side-effect-add.component';

describe('SideEffectAddComponent', () => {
  let component: SideEffectAddComponent;
  let fixture: ComponentFixture<SideEffectAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideEffectAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideEffectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
