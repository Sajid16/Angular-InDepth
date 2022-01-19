import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDataBindingComponent } from './components-data-binding.component';

describe('ComponentsDataBindingComponent', () => {
  let component: ComponentsDataBindingComponent;
  let fixture: ComponentFixture<ComponentsDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
