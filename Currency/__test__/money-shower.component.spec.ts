import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyShowerComponent } from '../src/app/money-shower/money-shower.component';

describe('MoneyShowerComponent', () => {
  let component: MoneyShowerComponent;
  let fixture: ComponentFixture<MoneyShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyShowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
