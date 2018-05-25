/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TreatedDrugsComponent } from './treated-drugs.component';

describe('TreatedDrugsComponent', () => {
  let component: TreatedDrugsComponent;
  let fixture: ComponentFixture<TreatedDrugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatedDrugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatedDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
