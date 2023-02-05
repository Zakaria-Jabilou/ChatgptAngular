import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatgptapiserviceService {

  constructor(private http:HttpClient) { }

  getfromchatgptcon(question:any) {

    return this.http.put("http://localhost:8000/Chatgpt",question);
  }
}

