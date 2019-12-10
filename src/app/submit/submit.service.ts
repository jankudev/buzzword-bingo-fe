import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BingoTile} from '../../assets/Bingo';
import {v4 as uuid} from 'uuid';

@Injectable()
export class SubmitService {
  readonly buzzwordBingoApiURL = 'https://buzzword-bingo-proxy.appspot.com/results';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {
  }

  doSubmit(email: string, fuckup: string, tiles: BingoTile[]) {
    const result = JSON.stringify({
      id: uuid(),
      email,
      fuckup,
      tiles
    });

    return this.http.post(this.buzzwordBingoApiURL, result, this.httpOptions);
  }
}
