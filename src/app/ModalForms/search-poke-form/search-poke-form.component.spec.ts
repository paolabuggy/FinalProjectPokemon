import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokeFormComponent } from './search-poke-form.component';

describe('SearchPokeFormComponent', () => {
  let component: SearchPokeFormComponent;
  let fixture: ComponentFixture<SearchPokeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPokeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPokeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
