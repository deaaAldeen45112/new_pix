

import * as common from "../../common/common.js";
import { makeToast } from "./toast.js";
import { UserService } from "../../service/UserService.js";
import { User } from "../../model/user.js";


let tbodyUser=document.getElementById("tbody_user");


let body=common.getElementByXpath("/html/body");
let buttonConfirmDelete=document.getElementById("delete_confirm_user");
let buttonCreate=document.getElementById("button_create");


// creat model
let fullNameInput  =common.getElementByXpath("//*[@id=\"basic-default-fullname\"]");
let passwordInput  =common.getElementByXpath("//*[@id=\"basic-default-company\"]");
let emailInput =common.getElementByXpath("//*[@id=\"basic-default-email\"]");
let phoneInput=common.getElementByXpath("//*[@id=\"basic-default-phone\"]");
let roleOption =document.getElementById("select_role");
let buttonSendUser =document.getElementById("button_send");

// update model
let inputUpdateName  =document.getElementById("input-user-update-name");
let inputUserUpdatePassword  =document.getElementById("input-user-update-password");
let inputUserUpdateEmail=document.getElementById("input-user-update-email");
let inputUserUpdatePhone=document.getElementById("input-user-update-phone");
let selectUserUpdateType =document.getElementById("select-user-update-type");
let buttonUpdateUser =document.getElementById("button-update");

//pagenation
let listPagenationUsers=document.getElementById('list-pagination-user')
//spinner
let spinnerUserTable=document.getElementById('spinner-user-table');


let pageNumber=1;
const pageSize=5;
let userIdNow=0;

buttonCreate.addEventListener('click',()=>{

    fullNameInput.value="";
    passwordInput.value="";
    emailInput.value="";
    phoneInput.value="";
    roleOption.selectedIndex=0;
    console.log("ok");
  
     
    });

   
buttonSendUser.addEventListener('click',async ()=>{
    
   
  
    let user=new User();

    user.user_name= fullNameInput.value;
    user.password=passwordInput.value;
    user.email=emailInput.value;
    user.phone=phoneInput.value;
    user.role_id=roleOption.value;
  
    console.log(user.toJSON());

   let effect= await UserService.create(user.toJSON());
    console.log(effect);
   if(effect.error==null){

    makeToast("bg-success");
    let res=await UserService.getPaginatedUsersWithRoleName(pageNumber,pageSize);
    console.log(res.data);
    fillUserTable(res.data);
    addEventListenersByClassName('btn-table-delete',function (){userIdNow=this.id;}) 
    addEventListenersByClassName('btn-table-update',assignUpdateInputs); 

    fillPageCom(res.totalPages);
    addEventListenersByClassName('button-page-user',changePageForTable ) 

   }

   
        
     });  
   
buttonUpdateUser.addEventListener('click',async ()=>{
    
   
        let user=new User();
        user.user_id=userIdNow;
        user.user_name=inputUpdateName.value;
        user.password=inputUserUpdatePassword.value;
        user.email=inputUserUpdateEmail.value;
        user.phone=inputUserUpdatePhone.value;
        user.role_id=selectUserUpdateType.value;

      console.log(user.toJSON());
    
       let effect= await UserService.update(user.toJSON());
        console.log(effect);
       if(effect.error==null){
    
        makeToast("bg-success");
        let res=await UserService.getPaginatedUsersWithRoleName(pageNumber,pageSize);
        console.log(res.data);
        fillUserTable(res.data);
       } });
    
buttonConfirmDelete.addEventListener('click',async ()=>{

        let effect= await UserService.delete(userIdNow);
        console.log(effect);
        if(effect.error==null){
     
         makeToast("bg-success");
         let res=await UserService.getPaginatedUsersWithRoleName(pageNumber,pageSize);
         console.log(res.data);
         fillUserTable(res.data);
         addEventListenersByClassName('btn-table-delete',function (){userIdNow=this.id;}) 
         addEventListenersByClassName('btn-table-update',assignUpdateInputs); 

         fillPageCom(res.totalPages);
         addEventListenersByClassName('button-page-user',changePageForTable ) 
 

        } });     

function fillUserTable(res){
   
      var index=1;
      let trAdd="";
      tbodyUser.innerHTML='';
      console.log("fill");
    //   if(res.status=="success"){
        res.forEach(element => {

        trAdd+=`<tr><th scope=\"row\">${index}</th>
                  <td id=${"td-name-"+element.user_id}>${element.user_name}</td>
                  <td id=${"td-email-"+element.user_id}>${element.email}</td>
                  <td id=${"td-password-"+element.user_id}>${element.password}</td>
                  <td id=${"td-phone-"+element.user_id}>${element.phone}</td>
                  <td id=${"td-role-"+element.user_id}>${element.role_name ?? "not exist"}</td>
                  <td><button id="${element.user_id}"  data-bs-toggle=\"modal\"  data-bs-target=\"#deleteModal\"type=\"button\" class=\"btn btn-danger btn-table-delete\">delete</button></td>
                  <td><button id="${element.user_id}" type=\"button\" class=\"btn btn-info btn-table-update\" data-bs-toggle=\"modal\" data-bs-target=\"#model-basic-update\">update</button></td></tr>
                  `;
                  index++;
    
        });
        tbodyUser.innerHTML=trAdd;
      
      }
    
  

document.addEventListener('DOMContentLoaded',async ()=>{
        toggleHidden(spinnerUserTable.id);
        let res=await UserService.getPaginatedUsersWithRoleName(pageNumber,pageSize);
        console.log(res);
        fillUserTable(res.data);
        toggleHidden(spinnerUserTable.id);
        
        addEventListenersByClassName('btn-table-delete',function (){userIdNow=this.id;}) 
        addEventListenersByClassName('btn-table-update',assignUpdateInputs); 

        fillPageCom(res.totalPages);
        addEventListenersByClassName('button-page-user',changePageForTable ) 



    })

function assignUpdateInputs (){
        userIdNow=this.id; 
        inputUpdateName.value=document.getElementById(`${"td-name-"+this.id}`).innerHTML;
        inputUserUpdatePassword.value=document.getElementById(`${"td-password-"+this.id}`).innerHTML;
        inputUserUpdateEmail.value=document.getElementById(`${"td-email-"+this.id}`).innerHTML;
        inputUserUpdatePhone.value=document.getElementById(`${"td-phone-"+this.id}`).innerHTML;
        selectUserUpdateType.value=document.getElementById(`${"td-role-"+this.id}`).innerHTML=="User"?1:2;
};



async function changePageForTable ()
    {
         pageNumber=this.innerHTML;
         let res=await UserService.getPaginatedUsersWithRoleName(this.innerHTML,pageSize);
         fillUserTable(res.data);
         addEventListenersByClassName('btn-table-delete',function (){userIdNow=this.id;}) 
         addEventListenersByClassName('btn-table-update',assignUpdateInputs); 

         let childItems= document.getElementsByClassName('button-page-user');
         
         Array.prototype.forEach.call(childItems, function(item) {
            item.parentNode.classList.remove('active');
          });
          this.parentNode.classList.add('active');
         
 }



function addEventListenersByClassName(classname,fun){
  
    var element= document.getElementsByClassName(classname);
   for(var i=0;i<element.length;i++){
       
        element[i].addEventListener("click",fun, false);   
   }
  }


function fillPageCom(totalPages){
   
      let trAdd=`  <li class="page-item first">
      <a class="page-link" href="javascript:void(0);"
        ><i class="tf-icon bx bx-chevrons-left"></i
      ></a>
    </li>
    <li class="page-item prev">
      <a class="page-link" href="javascript:void(0);"
        ><i class="tf-icon bx bx-chevron-left"></i
      ></a>
      </li>`;
      listPagenationUsers.innerHTML='';
  
    //   if(res.status=="success"){
     

       for (let index = 1; index <= totalPages; index++) {
        trAdd+=`  <li class="page-item ${index==pageNumber?'active':''} ">
        <a class="page-link button-page-user "  >${index}</a>
         </li>`;
        
       }
     

        trAdd+=`<li class="page-item next">
        <a class="page-link" href="javascript:void(0);"
          ><i class="tf-icon bx bx-chevron-right"></i
        ></a>
      </li>
      <li class="page-item last">
        <a class="page-link" href="javascript:void(0);"
          ><i class="tf-icon bx bx-chevrons-right"></i
        ></a>
                </li>`;
       listPagenationUsers.innerHTML=trAdd;
      
    

}

  
function toggleHidden(id) {
    var element = document.getElementById(id);

    // Check if the element is currently hidden
    if (element.hasAttribute("hidden")) {
        // If hidden, remove the hidden attribute to show the element
        element.removeAttribute("hidden");
    } else {
        // If not hidden, add the hidden attribute to hide the element
        element.setAttribute("hidden", "true");
    }
}





