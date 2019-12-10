import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BingoTile} from '../../assets/Bingo';

@Injectable()
export class SubmitService {
  constructor(private http: HttpClient) {
  }

  doSubmit(email: string, fuckup: string, tiles: BingoTile[]) {
    const result = JSON.stringify({
      email,
      fuckup,
      tiles
    });

    console.log(result);
    return this.http.post('/api/submit', result);
  }
}
