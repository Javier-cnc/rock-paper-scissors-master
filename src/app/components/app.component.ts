import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'starting-project';

  isRulesVisible: boolean = false;
  score: number = 0;

  updateScore(newScore: number) {
    this.score = newScore;
  }
}
