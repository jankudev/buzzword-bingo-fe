import {Component, Input, OnInit} from '@angular/core';
import {Bingo, BingoTile} from '../../assets/Bingo';

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

  /**
   * Checking selected indices
   * @param calcIndex Index calculation function to reuse same code
   */
  private checkForBingoInternal(calcIndex: (n: number, i: number, j: number) => number): boolean {
    const n = this.bingo.cols;
    const bt = this.bingo.tiles;
    const indices = [...Array(n).keys()];

    for (const i of indices) {
      let isBingoFlag = false;

      for (const j of indices) {
        const btIdx: number = calcIndex(n, i, j);
        isBingoFlag = bt[btIdx].selected;
        if (!isBingoFlag) {
          break;
        }
      }

      if (isBingoFlag) {
        alert('Bingo !!!');
        return true;
      }
    }
    return false;
  }

  /**
   * Perform a check for a bingo and if success, alert
   * @param changedTile The tile changed
   */
  checkForBingo(changedTile: BingoTile): boolean {
    // using indices from 0 as in arrays
    if (this.checkForBingoInternal((size: number, row: number, col: number) => ((row * size) + col))) {
      return true;  // rows
    }
    if (this.checkForBingoInternal((size: number, row: number, col: number) => ((col * size) + row))) {
      return true;  // columns
    }
    if (this.checkForBingoInternal((size: number, row: number, col: number) => ((col * (size + 1))))) {
      return true; // diagonals left->right (code but not runtime optimization)
    }
    // diagonals right->left (code but not runtime optimization)
    return this.checkForBingoInternal((size: number, row: number, col: number) => (((col + 1) * (size - 1))));
  }
}
