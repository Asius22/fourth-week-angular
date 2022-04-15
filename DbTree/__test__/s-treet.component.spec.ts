import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STreetComponent } from '../src/app/s-treet/s-treet.component';

describe('STreetComponent', () => {
  let component: STreetComponent;
  let fixture: ComponentFixture<STreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STreetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
