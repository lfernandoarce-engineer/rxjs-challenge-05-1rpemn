import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  declarations: [AppComponent, CountDownComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
