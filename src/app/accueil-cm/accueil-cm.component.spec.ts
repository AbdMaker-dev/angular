import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilCmComponent } from './accueil-cm.component';

describe('AccueilCmComponent', () => {
  let component: AccueilCmComponent;
  let fixture: ComponentFixture<AccueilCmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilCmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
