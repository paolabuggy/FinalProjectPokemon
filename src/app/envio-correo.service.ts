import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { usermodel } from './objuser';

@Injectable({
  providedIn: 'root'
})
export class EnvioCorreoService {
  url='http://localhost:3000/send'
  // postobj={
  //   name:"karla",
  //   lastname:"que",
  //   email:"no",
  //   message:"sixa"
  // }
  // json: string ="";
  constructor(public httpClient: HttpClient) { }

  // getJSON(url: string){
  //   return this.httpClient.get(url);
  // }
  send(obj: usermodel){
    return this.httpClient.post<any>(this.url, {'name':obj.name,'lastname':obj.lastname,'address':obj.address,'email':obj.email,'phone':obj.phone,'message':obj.message})
  }
}