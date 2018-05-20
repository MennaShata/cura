/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PillItemComponent } from './pill-item.component';

describe('PillItemComponent', () => {
  let component: PillItemComponent;
  let fixture: ComponentFixture<PillItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
