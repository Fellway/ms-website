import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeDeviderComponent } from './shape-devider.component';

describe('ShapeDeviderComponent', () => {
  let component: ShapeDeviderComponent;
  let fixture: ComponentFixture<ShapeDeviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeDeviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeDeviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
