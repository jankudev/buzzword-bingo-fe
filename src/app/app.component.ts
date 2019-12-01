import { Component } from '@angular/core';

import { Bingo } from '../assets/Bingo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly title = 'Buzzword Bingo!';
  readonly bingo = new Bingo();
  readonly dateOfStart = new Date('2019-12-11');

  enabledBingoFlag = this.isBingoEnabled();

  isBingoEnabled(): boolean {
    return Date.now() > this.dateOfStart.getTime();
  }

  enableBingo() {
    this.enabledBingoFlag = true;
  }


}
