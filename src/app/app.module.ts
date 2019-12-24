import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerBoosterComponent } from './power-booster/power-booster.component';
import { ExponentialStrengthPipePipe } from './exponential-strength-pipe.pipe';
import { HighlightDirectiveDirective } from './highlight-directive.directive';

@NgModule({
  // compent dirctive pipe 放的地方
  declarations: [
    AppComponent,
    PowerBoosterComponent,
    ExponentialStrengthPipePipe,
    HighlightDirectiveDirective],
  // 依賴其他Module
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  // services存放
  providers: [],

  // 根元件
  bootstrap: [AppComponent]
})
export class AppModule { }
