import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeGraphsComponent } from './poke-graphs.component';

describe('PokeGraphsComponent', () => {
  let component: PokeGraphsComponent;
  let fixture: ComponentFixture<PokeGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeGraphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
