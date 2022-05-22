import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeValidatorsComponent } from './home-validators.component';

describe('HomeValidatorsComponent', () => {
  let component: HomeValidatorsComponent;
  let fixture: ComponentFixture<HomeValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
