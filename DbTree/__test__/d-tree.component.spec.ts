import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTreeComponent } from '../src/app/d-tree/d-tree.component';

describe('DTreeComponent', () => {
  let component: DTreeComponent;
  let fixture: ComponentFixture<DTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
