import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictsearchComponent } from './districtsearch.component';

describe('DistrictsearchComponent', () => {
  let component: DistrictsearchComponent;
  let fixture: ComponentFixture<DistrictsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
