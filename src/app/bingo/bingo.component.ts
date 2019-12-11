import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bingo, BingoTile} from '../../assets/Bingo';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component-0817.css']
})
export class BingoComponent implements OnInit {

  @Input()
  bingo: Bingo;

  @Output() isBingoEmitter = new EventEmitter();

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
    let isBingo = false;

    // using indices from 0 as in arrays
    if (this.checkForBingoInternal((size: number, row: number, col: number) => ((row * size) + col))) {
      isBingo = true;  // rows
    } else if (this.checkForBingoInternal((size: number, row: number, col: number) => ((col * size) + row))) {
      isBingo = true;  // columns
    } else if (this.checkForBingoInternal((size: number, row: number, col: number) => ((col * (size + 1))))) {
      isBingo = true; // diagonals left->right (code but not runtime optimization)
    } else {
      // diagonals right->left (code but not runtime optimization)
      isBingo = this.checkForBingoInternal((size: number, row: number, col: number) => (((col + 1) * (size - 1))));
    }

    this.isBingoEmitter.emit(isBingo);
    return isBingo;

  }
}
