import {Component, Inject} from '@angular/core';

import {Bingo} from '../assets/Bingo';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

import {isStorageAvailable, LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

import {SubmitService} from './submit/submit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SubmitService]
})
export class AppComponent {
  /* constants */
  readonly title = 'Buzzword Bingo!';
  readonly bingo = new Bingo();
  readonly dateOfStart = new Date('2019-10-11');
  readonly emailPattern = '^[^@]*@(ext.)?csas.cz';

  /* form */
  bingoForm: FormGroup;
  emailFormControl: FormControl;
  fuckUpFormControl: FormControl;

  /* control flags */
  storageAvailable: boolean;
  enabledBingoFlag = this.isBingoEnabled();
  isBingo = false;

  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              @Inject(LOCAL_STORAGE) private storage: StorageService,
              private submitService: SubmitService) {
    this.storageAvailable = isStorageAvailable(sessionStorage);

    this.emailFormControl = new FormControl(this.storageAvailable ? this.storage.get('email') : '',
      [Validators.required, Validators.pattern(this.emailPattern)]);
    this.fuckUpFormControl = new FormControl(this.storageAvailable ? this.storage.get('fuckup') : '',
      [Validators.required]);
    this.bingoForm = formBuilder.group([this.emailFormControl, this.fuckUpFormControl]);
  }

  isBingoEnabled(): boolean {
    return Date.now() > this.dateOfStart.getTime();
  }

  enableBingo() {
    this.enabledBingoFlag = true;
  }

  handleBingo(isBingo: boolean) {
    /*
    if (!this.isBingo && isBingo) {
      this.snackBar.open('👏 Bingo 👏', 'x');
    }
    */
    this.isBingo = isBingo;
  }

  private storeInLocalStorage(key: string, value: string) {
    if (this.storageAvailable) {
      this.storage.set(key, value);
    }
  }

  emailChanged(email: string) {
    this.storeInLocalStorage('email', email);
  }

  fuckupChanged(fuckup: string) {
    this.storeInLocalStorage('fuckup', fuckup);
  }

  submit() {
    if (this.isBingo) {
      this.submitService.doSubmit(
        this.emailFormControl.value,
        this.fuckUpFormControl.value,
        this.bingo.tiles);
    }
  }
}
