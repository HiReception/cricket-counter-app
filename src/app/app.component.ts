import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsButtonComponent } from "./settings-button/settings-button.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SettingsButtonComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Doyle's Cricket Counter";
}
