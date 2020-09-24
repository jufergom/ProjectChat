import { Component, OnInit } from '@angular/core';
import { Channel } from '../../models/channel';
import { ChannelService } from '../../services/channel.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  formShowed: boolean = false;

  channels: Channel[]= [];

  channelCode: string;

  constructor(private channelService: ChannelService) { }

  ngOnInit(): void {
    this.channelService.getUserChannels(localStorage.getItem("username")).subscribe(res => {
      this.channels = res;
    }, error => console.log(error)
    );
  }

  showForm():void{
    this.formShowed= !this.formShowed;
  }

  addChannel(): void {
    console.log(this.channelCode);
    this.channelService.assignChannelToUser(+this.channelCode, localStorage.getItem("username")).subscribe(res => {
      alert("Canal agregado correctamente");
      this.ngOnInit();
    }, error => alert("Error agregando canal"))
  }

}
