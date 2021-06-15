import { Component } from '@angular/core';
import {userService} from './app.service'; 


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

    name:string;
    pwd:string;
    result:boolean;
    formHide : boolean= false;

    constructor(private users:userService){}

   getUserDetails(): void{
         
   this.result = this.users.getUsers(this.name, this.pwd);

         if(this.result){
             //this.document.location.href = 'https://stackoverflow.com';
             window.open("https://stackoverflow.com");
             this.formHide = true;
         }
     }

}
