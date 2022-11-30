import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CountDownComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
