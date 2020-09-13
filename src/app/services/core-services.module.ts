import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ChannelService} from './channel.service';
import {UserService} from './user.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  //Services Here
  providers:[
    ChannelService,
    UserService
  ]
})
export class CoreServicesModule { }
