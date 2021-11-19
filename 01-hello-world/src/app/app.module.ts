import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TitleComponent} from './components/ titulo.component';
import { InterruptorComponent } from './components/interruptor/interruptor.component';
import { Interruptor2Component } from './components/interruptor2/interruptor2.component';
import { CocheComponent } from './components/coche/coche.component'

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    InterruptorComponent,
    Interruptor2Component,
    CocheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
