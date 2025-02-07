import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core'

@Component({
  selector: 'app-scorer-pane',
  imports: [
    DecimalPipe,
    MatRippleModule
  ],
  templateUrl: './scorer-pane.component.html',
  styleUrl: './scorer-pane.component.css'
})
export class ScorerPaneComponent {
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
