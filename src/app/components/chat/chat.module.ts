import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatRoutingModule} from '../chat/chat-routing.module';
import {ChatComponent} from '../chat/chat.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChatModule { }
