import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinsearchComponent } from './pinsearch.component';

describe('PinsearchComponent', () => {
  let component: PinsearchComponent;
  let fixture: ComponentFixture<PinsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
