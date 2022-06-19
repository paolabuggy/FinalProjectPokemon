import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSoloPageComponent } from './pokemon-solo-page.component';

describe('PokemonSoloPageComponent', () => {
  let component: PokemonSoloPageComponent;
  let fixture: ComponentFixture<PokemonSoloPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSoloPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSoloPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
