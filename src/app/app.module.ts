import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import { BingoComponent } from './bingo/bingo.component';
import { BingoTileComponent } from './bingo-tile/bingo-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    BingoComponent,
    BingoTileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
