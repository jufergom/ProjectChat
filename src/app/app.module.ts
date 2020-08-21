import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreServicesModule} from './services/core-services.module';
import {LoginModule} from './components/login/login.module';
import {RegisterModule} from './components/register/register.module';

import {ChannelsModule} from './components/channels/channels.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreServicesModule,
    LoginModule,
    RegisterModule,
    ChannelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
