import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ChatComponent} from './chat.component';

const routes: Routes = [
  {path:'chat', component: ChatComponent} 
];

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ChatRoutingModule { }
