import { effect, Inject, Injectable, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { Settings } from './settings.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  browserMode = false;

  DEFAULT_SETTINGS: Settings = {
    settingsButtonPosition: "bottom-right",
  }

  settings: WritableSignal<Settings>;

  overCount: WritableSignal<number>;
  ballCount: WritableSignal<number>

  

  syncSettings = effect(() => {
    if (this.browserMode) {
      localStorage?.setItem('settings', JSON.stringify(this.settings()));
    }
  });

  
  constructor(
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.browserMode = isPlatformBrowser(platformId);

    // get any settings currently stored locally
    const startingLocalSettings = this.browserMode ? JSON.parse(localStorage?.getItem('settings') || "{}") : {};
    
    // cover any missing keys with the default value
    const fullStartingSettings: Settings = {
      ...this.DEFAULT_SETTINGS,
      ...startingLocalSettings
    };

    this.settings = signal<Settings>(fullStartingSettings);

    this.overCount = signal<number>(0);
    this.ballCount = signal<number>(0);
  }
}
