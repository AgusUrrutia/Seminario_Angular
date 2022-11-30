import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPlayersComponent } from './cards-players.component';

describe('CardsPlayersComponent', () => {
  let component: CardsPlayersComponent;
  let fixture: ComponentFixture<CardsPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
