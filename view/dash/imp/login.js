import { UserService } from "../../service/UserService.js";

import * as en from "../../common/env.js";
import { makeToast } from "./toast.js";




let buttonSignIn =document.getElementById('button-sign-in');
let pass=document.getElementById('password');
let email=document.getElementById('email');


buttonSignIn.addEventListener('click',async ()=>{

    let effect=null;
     let loginDto={

        password:pass.value,
        email:email.value
     }
     try{

         effect=await UserService.login( JSON.stringify(loginDto));
        makeToast('bg-success');
     }

  catch(exp){
   
    console.log("not found")
         
  }

  if(effect!=null){
    console.log(effect)
        localStorage.setItem('token',effect.token);
         localStorage.setItem('username',effect.user.name);
         localStorage.setItem('roleName',effect.user.role.roleName);
         localStorage.setItem('roleId',effect.user.roleId);
         localStorage.setItem('userId',effect.user.userId);
         window.location.href = en.clinetHost+"DoctorQuizFront\\view\\website\\index.html";  
        console.log("ok");
    
    }



});