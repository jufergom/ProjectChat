import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Channel} from '../models/channel';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  baseUrl: string = "";
  constructor(private httpClient: HttpClient) { }

  getUserChannels(username:string): Observable<Channel[]>{
    return this.httpClient.get<Channel[]>(this.baseUrl+"?user="+username);
  }

  getChannelUsers(id: number): Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl+id);
  }

  assignChannelToUser(id: number): Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl+id,{});
  }
}
