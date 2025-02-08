import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core'

@Component({
  selector: 'app-counter-pane',
  imports: [
    DecimalPipe,
    MatRippleModule
  ],
  templateUrl: './counter-pane.component.html',
  styleUrl: './counter-pane.component.css'
})
export class CounterPaneComponent {
  overCount: number = 0;
  ballCount: number = 0;

  incrementOvers() {
    this.overCount++;
    this.ballCount = 0;
  }

  incrementBalls() {
    this.ballCount++;
  }
}
