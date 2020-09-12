import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  SOCKET_ENDPOINT: string = 'localhost:3000';

  form: FormGroup;

  socket: any;

  constructor() {
    this.setupSocketConnection();
    this.form = new FormGroup({message: new FormControl("")});
  }

  ngOnInit(): void {
  }

  setupSocketConnection() {
    this.socket = io(this.SOCKET_ENDPOINT);
    this.socket.on('message-broadcast', (data: string) => {
      if (data) {
       const element = document.createElement('li');
       element.innerHTML = data;
       element.style.background = 'white';
       element.style.padding =  '15px 30px';
       element.style.margin = '10px';
       document.getElementById('message-list').appendChild(element);
       }
     });
  }

  sendMessage() {
    const message = this.form.value;
    this.socket.emit('message', message.message);
    console.log("emmited");
    const element = document.createElement('li');
    element.innerHTML = message.message;
    element.style.background = 'white';
    element.style.padding =  '15px 30px';
    element.style.margin = '10px';
    element.style.textAlign = 'right';
    document.getElementById('message-list').appendChild(element);
    
  }

}
