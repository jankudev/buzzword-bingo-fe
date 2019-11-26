import { Component } from '@angular/core';

import { Bingo } from "../assets/Bingo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bwbingo-fe';

  bingo = new Bingo();
}
