import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioPanelComponent } from './bio-panel.component';

describe('BioPanelComponent', () => {
  let component: BioPanelComponent;
  let fixture: ComponentFixture<BioPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
