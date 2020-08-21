import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ChannelsComponent} from './channels.component';

const routes: Routes = [
  { path: 'channels', component: ChannelsComponent }
];

@NgModule({
  declarations: [ChannelsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ChannelsRoutingModule { }
