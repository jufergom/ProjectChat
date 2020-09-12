import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatRoutingModule} from '../chat/chat-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChatModule { }
