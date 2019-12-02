import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule, MatGridListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CountdownModule } from 'ng2-date-countdown';

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
    MatButtonModule,
    FlexLayoutModule,
    CountdownModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
