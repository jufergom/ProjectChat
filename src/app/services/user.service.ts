import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Definir url
  baseUrl: string = "";
  credentialUrl: string = "";
  constructor(private httpClient: HttpClient) { }

  verifyUserCredentials(user: User): Observable<boolean>{
    return this.httpClient.post<boolean>(this.credentialUrl,user);
  }

  addUser(user: User){
    return this.httpClient.post(this.baseUrl,user);
  }


}
