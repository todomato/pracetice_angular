import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerBoosterComponent } from './power-booster/power-booster.component';
import { ExponentialStrengthPipePipe } from './exponential-strength-pipe.pipe';
import { HighlightDirectiveDirective } from './highlight-directive.directive';

@NgModule({
  // compent dirctive pipe �񪺦a��
  declarations: [
    AppComponent,
    PowerBoosterComponent,
    ExponentialStrengthPipePipe,
    HighlightDirectiveDirective],
  // �̿��LModule
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  // services�s��
  providers: [],

  // �ڤ���
  bootstrap: [AppComponent]
})
export class AppModule { }
