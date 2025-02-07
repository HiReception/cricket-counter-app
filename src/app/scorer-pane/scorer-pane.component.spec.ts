import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorerPaneComponent } from './scorer-pane.component';

describe('ScorerPaneComponent', () => {
  let component: ScorerPaneComponent;
  let fixture: ComponentFixture<ScorerPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScorerPaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScorerPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
