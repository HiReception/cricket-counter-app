import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { LocalStorageService } from '../local-storage.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings-button',
  imports: [
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './settings-button.component.html',
  styleUrl: './settings-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsButtonComponent {
  localStorageService = inject(LocalStorageService);

  updateSettings(key: string, value: any) {
    const existingSettings = this.localStorageService.settings();
    this.localStorageService.settings.set({
      ...existingSettings,
      [key]: value
    })
  }

  resetCounts() {
    this.localStorageService.ballCount.set(0);
    this.localStorageService.overCount.set(0);
  }
}
