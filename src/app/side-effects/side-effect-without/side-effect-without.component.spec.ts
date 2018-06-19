/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SideEffectWithoutComponent } from './side-effect-without.component';

describe('SideEffectWithoutComponent', () => {
  let component: SideEffectWithoutComponent;
  let fixture: ComponentFixture<SideEffectWithoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideEffectWithoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideEffectWithoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
