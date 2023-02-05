import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatgptapiComponent} from "./chatgptapi/chatgptapi.component";

const routes: Routes = [
  {
    path:"",component:ChatgptapiComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
