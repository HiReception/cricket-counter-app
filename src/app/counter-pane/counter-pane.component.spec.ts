import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPaneComponent } from './counter-pane.component';

describe('CounterPaneComponent', () => {
  let component: CounterPaneComponent;
  let fixture: ComponentFixture<CounterPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterPaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
