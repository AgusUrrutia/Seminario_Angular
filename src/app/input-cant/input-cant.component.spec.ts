import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCantComponent } from './input-cant.component';

describe('InputCantComponent', () => {
  let component: InputCantComponent;
  let fixture: ComponentFixture<InputCantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
