import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  elements: any[]= [
    { id: 'projecto1', name:'Projecto 1', topic: 'Topic 1'},
    { id: 'projecto2', name:'Projecto 2', topic: 'Topic 2'},
    { id: 'projecto3', name:'Projecto 3', topic: 'Topic 3'},
    { id: 'projecto4', name:'Projecto 4', topic: 'Topic 4'},
    { id: 'projecto5', name:'Projecto 5', topic: 'Topic 5'},
    { id: 'projecto6', name:'Projecto 6', topic: 'Topic 6'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
