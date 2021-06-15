import{ Injectable} from '@angular/core';

@Injectable()


export class userService{

 public usersList:Array<{name:string, password:string}> =[{name:"srinivas", password:"panuganti"},
 {name:"sainath", password:"salla"},
 {name:"sainath", password:"salla"},
          {name:"sri",password:"hi"}]

        failure:boolean=false;
        success:boolean = false;

    getUsers(name:string, pwd:string){
           
     for(let i=0; i<this.usersList.length;i++){
              console.log(this.usersList.length);
            if( name == this.usersList[i].name && pwd == this.usersList[i].password){
                        console.log("welcome"+name);
                      this.success = true;
            }

            else{
                this.failure = false;
            }

   }
     

     if(this.success){
      return true
     }
    else{
        console.log(" Please register")
        return false;
    }

   }
  
  


}
