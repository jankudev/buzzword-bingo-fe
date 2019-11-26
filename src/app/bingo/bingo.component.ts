import {Component, Input, OnInit} from '@angular/core';
import {Bingo} from "../../assets/Bingo";

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.css']
})
export class BingoComponent implements OnInit {

  @Input()
  bingo: Bingo;

  constructor() { }

  ngOnInit() {
  }

}
