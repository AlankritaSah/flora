import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artboard3Component } from './artboard3.component';

describe('Artboard3Component', () => {
  let component: Artboard3Component;
  let fixture: ComponentFixture<Artboard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Artboard3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Artboard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
