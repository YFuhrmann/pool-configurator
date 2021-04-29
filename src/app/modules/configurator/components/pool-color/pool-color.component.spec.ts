import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolColorComponent } from './pool-color.component';

describe('PoolColorComponent', () => {
  let component: PoolColorComponent;
  let fixture: ComponentFixture<PoolColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
