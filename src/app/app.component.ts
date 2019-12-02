import { Component } from '@angular/core';

import { Bingo } from '../assets/Bingo';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly title = 'Buzzword Bingo!';
  readonly bingo = new Bingo();
  readonly dateOfStart = new Date('2019-12-11');
  readonly emailPattern = '^[^@]*@(ext.)?csas.cz';

  /* form */
  bingoForm: FormGroup;
  emailFormControl: FormControl;
  fuckUpFormControl: FormControl;

  /* control flags */
  enabledBingoFlag = this.isBingoEnabled();
  isBingo = false;

  constructor( private formBuilder: FormBuilder,
               private snackBar: MatSnackBar) {
    this.emailFormControl = new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]);
    this.fuckUpFormControl = new FormControl('', [Validators.required]);
    this.bingoForm = formBuilder.group([this.emailFormControl, this.fuckUpFormControl]);
    this.snackBar = snackBar;
  }

  isBingoEnabled(): boolean {
    return Date.now() > this.dateOfStart.getTime();
  }

  enableBingo() {
    this.enabledBingoFlag = true;
  }

  handleBingo(isBingo: boolean) {
    if (!this.isBingo && isBingo) {
      this.snackBar.open('👏 Bingo 👏', 'x');
    }
    this.isBingo = isBingo;
  }


}
