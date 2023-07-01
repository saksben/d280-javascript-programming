import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsboxComponent } from './statsbox.component';

describe('StatsboxComponent', () => {
  let component: StatsboxComponent;
  let fixture: ComponentFixture<StatsboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsboxComponent]
    });
    fixture = TestBed.createComponent(StatsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
