import { effect, inject, Injectable, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { Settings } from './settings.model';
import { isPlatformBrowser } from '@angular/common';

/**
 * A service for managing the storing and retrival of data from local storage.
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  /** Boolean to indicate if this is client-side rendering */
  browserMode = false;

  /** The default settings for the application */
  DEFAULT_SETTINGS: Settings = {
    settingsButtonPosition: "bottom-right",
  }

  settings: WritableSignal<Settings>;

  overCount: WritableSignal<number>;
  ballCount: WritableSignal<number>;

  platformId = inject(PLATFORM_ID);

  
  /**
   * Effect which fires any time `settings` is changed;
   * updates the settings value on local storage to match the new settings values.
   */
  syncSettings = effect(() => {
    if (this.browserMode) {
      localStorage?.setItem('settings', JSON.stringify(this.settings()));
    }
  });

  
  constructor() {
    /** Determine if this is client-side rendering */
    this.browserMode = isPlatformBrowser(this.platformId);

    /** Get any settings currently stored locally */
    const startingLocalSettings = this.browserMode ? JSON.parse(localStorage?.getItem('settings') || "{}") : {};
    
    /** Cover any missing keys with the default value */
    const fullStartingSettings: Settings = {
      ...this.DEFAULT_SETTINGS,
      ...startingLocalSettings
    };

    /** Create signal for the settings object for monitoring changes */
    this.settings = signal<Settings>(fullStartingSettings);

    /** Create signal for the current over count */
    this.overCount = signal<number>(0);

    /** Create signal for the current ball count */
    this.ballCount = signal<number>(0);
  }
}
