import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForComponentComponent } from '../src/app/for-component/for-component.component';

describe('ForComponentComponent', () => {
  let component: ForComponentComponent;
  let fixture: ComponentFixture<ForComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
