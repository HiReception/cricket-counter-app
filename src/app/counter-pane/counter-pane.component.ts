import { DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core'
import { LocalStorageService } from '../local-storage.service';

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

  localStorageService = inject(LocalStorageService);

  incrementOvers() {
    this.overCount++;
    this.ballCount = 0;
  }

  incrementBalls() {
    this.ballCount++;
  }
}
