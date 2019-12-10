import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BingoTile} from '../../assets/Bingo';
import {v4 as uuid} from 'uuid';

const buzzwordBingoApiURL = 'http://34.69.136.241/results';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class SubmitService {
  constructor(private http: HttpClient) {
  }

  doSubmit(email: string, fuckup: string, tiles: BingoTile[]) {
    const result = JSON.stringify({
      id: uuid(),
      email,
      fuckup,
      tiles
    });

    console.log(result);
    return this.http.post(buzzwordBingoApiURL, result, httpOptions);
  }
}
