import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilAprenantComponent } from './accueil-aprenant.component';

describe('AccueilAprenantComponent', () => {
  let component: AccueilAprenantComponent;
  let fixture: ComponentFixture<AccueilAprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilAprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilAprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
