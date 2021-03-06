import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChannelsComponent} from './channels.component';

const routes: Routes = [
  { path: 'channels', component: ChannelsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ChannelsRoutingModule { }
