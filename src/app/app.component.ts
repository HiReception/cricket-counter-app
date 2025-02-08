import { Component } from '@angular/core';
import { ScorerPaneComponent } from "./scorer-pane/scorer-pane.component";

@Component({
  selector: 'app-root',
  imports: [ScorerPaneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cricket-scorer-app';
}
