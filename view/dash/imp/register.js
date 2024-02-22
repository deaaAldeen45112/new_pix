import { UserService } from "../../service/UserService.js";
import { makeToast } from "./toast.js";





let email=document.getElementById('email');

let pass=document.getElementById('password');

let username=document.getElementById('username');

let buttonSignUp=document.getElementById('button-sign-up');

buttonSignUp.addEventListener('click',async ()=>{


    let user={
        email:email.value,
        password: pass.value,
        name:username.value
      
      }
      console.log(user);
      let effect=await UserService.register( JSON.stringify(user));
      
      if(effect){
          makeToast('bg-success');
          console.log("ok")
          window.location.href = en.clinetHost+"DoctorQuizFront\\view\\dash\\html\\auth-login-basic.htmlj";  
      }
})
