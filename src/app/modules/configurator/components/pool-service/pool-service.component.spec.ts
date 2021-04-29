import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolServiceComponent } from './pool-service.component';

describe('PoolServiceComponent', () => {
  let component: PoolServiceComponent;
  let fixture: ComponentFixture<PoolServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
