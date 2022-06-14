import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonesComponent } from './pokemones.component';

describe('PokemonesComponent', () => {
  let component: PokemonesComponent;
  let fixture: ComponentFixture<PokemonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
