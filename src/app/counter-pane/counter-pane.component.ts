import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core'
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-counter-pane',
  imports: [
    DecimalPipe,
    MatRippleModule
  ],
  templateUrl: './counter-pane.component.html',
  styleUrl: './counter-pane.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPaneComponent {

  localStorageService = inject(LocalStorageService);

  overCount = this.localStorageService.overCount;
  ballCount = this.localStorageService.ballCount;

  incrementOvers() {
    this.overCount.update(prev => prev + 1);
    this.ballCount.set(0);
  }

  incrementBalls() {
    this.ballCount.update(prev => prev + 1);
  }
}
