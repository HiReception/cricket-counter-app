import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { LocalStorageService } from '../local-storage.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

/**
 * A button and menu for viewing and changing the [`Settings`](../settings.model.ts) of the application.
 */
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
  /** Injected service for synchronising settings with local storage */
  localStorageService = inject(LocalStorageService);

  /**
   * Update a single setting on the application.
   * @param key The key of the setting to be updated
   * @param value The new value of the setting of key `key`
   */
  updateSettings(key: string, value: unknown) {
    /** Clone existing settings object */
    const existingSettings = this.localStorageService.settings();

    /** Update clone to include changed setting, and then update app settings using mutated clone */
    this.localStorageService.settings.set({
      ...existingSettings,
      [key]: value
    })
  }

  /**
   * Reset all values on the counter.
   */
  resetCounts() {
    /** Reset the ball count */
    this.localStorageService.ballCount.set(0);

    /** Reset the over count */
    this.localStorageService.overCount.set(0);
  }
}
