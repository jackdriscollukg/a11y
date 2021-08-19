import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgniteModule } from '@ignite/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { DlsLoginComponent } from './dls-login/dls-login.component';
import { DlsLoginCardComponent } from './dls-login-card/dls-login-card.component';
import { SuccessComponent } from './success/success.component';
import { BrokenLoginComponent } from './broken-login/broken-login.component';

@NgModule({
  declarations: [
    AppComponent,
    DlsLoginComponent,
    DlsLoginCardComponent,
    SuccessComponent,
    BrokenLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IgniteModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
