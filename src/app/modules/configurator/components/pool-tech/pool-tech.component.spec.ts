import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolTechComponent } from './pool-tech.component';

describe('PoolTechComponent', () => {
  let component: PoolTechComponent;
  let fixture: ComponentFixture<PoolTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
