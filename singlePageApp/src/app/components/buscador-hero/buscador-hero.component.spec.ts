import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorHeroComponent } from './buscador-hero.component';

describe('BuscadorHeroComponent', () => {
  let component: BuscadorHeroComponent;
  let fixture: ComponentFixture<BuscadorHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
