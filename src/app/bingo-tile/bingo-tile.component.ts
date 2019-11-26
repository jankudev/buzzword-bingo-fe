import {Component, Input, OnInit} from '@angular/core';
import {BingoTile} from "../../assets/Bingo";

@Component({
  selector: 'app-bingo-tile',
  templateUrl: './bingo-tile.component.html',
  styleUrls: ['./bingo-tile.component.css']
})
export class BingoTileComponent implements OnInit {

  @Input()
  tile: BingoTile;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.tile.selected = !this.tile.selected;
  }
}
