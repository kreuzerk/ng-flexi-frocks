import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFlexiFrocksComponent } from './ng-flexi-frocks.component';

describe('NgFlexiFrocksComponent', () => {
  let component: NgFlexiFrocksComponent;
  let fixture: ComponentFixture<NgFlexiFrocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFlexiFrocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgFlexiFrocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
