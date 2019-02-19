import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {reducers} from './store/app.state';
import {StoreModule} from '@ngrx/store';
import {AuthenticationEffects} from './store/effects/authentication.effects';
import {EffectsModule} from '@ngrx/effects';
import {FormsModule} from '@angular/forms';
import {Routing} from './app.routes';
import {AuthenticationService} from './services/authentication.service';
import {AuthenticationGuardService} from './services/authentication-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    EffectsModule.forRoot([AuthenticationEffects]),
    StoreModule.forRoot(reducers, {})
  ],
  providers: [
    AuthenticationGuardService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
