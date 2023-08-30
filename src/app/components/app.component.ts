import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'starting-project';

  isRulesVisible: boolean = false;
  score: number = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.score = Number.parseInt(params.get('score') || '0');
      this.score = Number.isNaN(this.score) ? 0 : this.score;
    });
  }

  updateScore(newScore: number) {
    this.score += newScore;

    // trunck the score value in 0 as minimum value
    if (this.score < 0) {
      this.score = 0;
    }

    // save the score value in url of the site to void data lost
    // if the use reload te browser
    this.router.navigate([], { queryParams: { score: this.score } });
  }
}
