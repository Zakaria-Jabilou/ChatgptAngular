import {Component, OnInit} from '@angular/core';
import {ChatgptapiserviceService} from "../services/chatgptapiservice.service";
import {Question} from "../model/Question";

@Component({
  selector: 'app-chatgptapi',
  templateUrl: './chatgptapi.component.html',
  styleUrls: ['./chatgptapi.component.css']
})
export class ChatgptapiComponent implements OnInit{
  x!:Question;
  z!:any;
  name!:any;
  constructor(private chatgpt:ChatgptapiserviceService) {
  }

  ngOnInit(): void {


  }


  onSubmit(name: any) {
    this.x={
      question:this.name

    }
    this.chatgpt.getfromchatgptcon(this.x).subscribe({
      next:(data=>{
        this.z=data;


        console.log(this.z.choices);
      })
    })

  }


}
