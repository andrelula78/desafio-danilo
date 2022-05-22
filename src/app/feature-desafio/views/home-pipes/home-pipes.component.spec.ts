import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePipesComponent } from './home-pipes.component';

describe('HomePipesComponent', () => {
  let component: HomePipesComponent;
  let fixture: ComponentFixture<HomePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
