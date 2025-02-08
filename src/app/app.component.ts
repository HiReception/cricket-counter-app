import { Component } from '@angular/core';
import { CounterPaneComponent } from "./counter-pane/counter-pane.component";

@Component({
  selector: 'app-root',
  imports: [CounterPaneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Doyle's Cricket Counter";
}
