import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cdk-announce-selection';

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/']);
  }

  goToSelection(): void {
    this.router.navigate(['/selection']);
  }

  goToSelectionDetails(): void {
    this.router.navigate(['/selection-details']);
  }

  goToLiveAnnounce(): void {
    this.router.navigate(['/announce']);
  }
}
