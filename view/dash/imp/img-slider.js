

import * as common from "../../common/common.js";
import * as en from "../../common/env.js";
import { makeToast } from "./toast.js";
import { CategoryService } from "../../service/CategoryService.js";
import { HomeService } from "../../service/HomeService.js";




let typeOfOpreation = "";
let topicRows = [];
let topicRowsWhenParentNull = [];
let defaultElements = 1;
let topicRowChilds=[];




let buttonPopupModelUserCreate=document.getElementById('button-popup-model-user-create');
let buttonUpdate = document.getElementById("button_update_parents");
let buttonUpdateChild = document.getElementById("button_update_table_2");
let buttonSend = document.getElementById("button_send");

let topicNameInput = document.getElementById('basic-default-fullname');

let inputTopicNameUpdateChild = document.getElementById('input-update-category-topicname-child')

let inputTopicNameUpdateParent = document.getElementById('input-update-category-topicname-parent')



let selectParent = document.getElementById("select_parents");
let selectChild = document.getElementById("select_child");


let selectCreateParent = document.getElementById("select_create_parents");
let selectUpdateCategoryParent=document.getElementById('select-update-category-topicname-parent')
let selectUpdateCategoryChild=document.getElementById('select-update-category-topicname-child')

let buttonConfirmDelete = document.getElementById(
  "button_confirm_delete_parents"
);

let buttonConfirmDeleteChild=document.getElementById("button_confirm_delete_child");


let buttonConfirmUpdateChild=document.getElementById('button-confirm-update-child');
let buttonConfirmUpdateParent=document.getElementById('button-confirm-update-parent');



// category image slider 

let inputCategoryImagesCreate=  document.getElementById('input-category-images-create');
let buttonCategoryImageSlider=  document.getElementById('button-category-image-slider');
let buttonSubCategoryImageSlider=  document.getElementById('button-subcategory-image-slider');
inputCategoryImagesCreate.addEventListener('change',()=>{


  let sliderImgs= document.getElementById('carousel-inner-category-images-create');
  
  let d= sliderImgs.innerHTML;
  sliderImgs.innerHTML="";
  for (let index = 0; index < inputCategoryImagesCreate.files.length; index++) {
    let img=`<div class="carousel-item carousel-item-category-update ${index==0 &&d=="" ?"active":""}">  <img class="d-block w-100" src="${URL.createObjectURL(inputCategoryImagesCreate.files[index])}" alt="" /></div>`;
     d+=img;
  }
  sliderImgs.innerHTML=d;



});


let buttonCarouselCategoryImagesDelete=document.getElementById('button-carousel-category-images-delete');

buttonCarouselCategoryImagesDelete.addEventListener('click',async ()=>{

  console.log("okkkkk");

  var activeCarouselItem = document.querySelector('.carousel-item.carousel-item-category-update.active');

 
  if (activeCarouselItem) {
      
      activeCarouselItem.remove();
      if(activeCarouselItem.children[0].id!=""){
      // console.log("Found active carousel item:", activeCarouselItem.children[0].id);
      let effect = await HomeService.deleteImgSliders(activeCarouselItem.children[0].id);
      if(effect){


      }
      }


        

  var firstCarouselItem = document.querySelector('.carousel-item-category-update:first-child');
  if (firstCarouselItem) {
              firstCarouselItem.classList.add('active');
          }
  } 
  
  else {
      console.log("No active carousel item found.");
  }
})

let buttonModalCategoryImagesConfirm=document.getElementById('button-modal-category-images-confirm');

buttonModalCategoryImagesConfirm.addEventListener('click', async ()=>{
 

  
 await UploadImages(selectParent.value,'.carousel-item-category-update img');
    
 

});


async function getImageFile(imgElement) {
  // Get the image source (URL) from the img element
  var imageUrl = imgElement.src;

  // Make an HTTP GET request to the image URL and convert the response to a Blob
  return fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => new File([blob], 'image.jpg', { type: 'image/jpeg' }))
      .catch(error => {
          console.error('Error fetching image:', error);
          return null;
      });
}


async function UploadImages(type,classNameImageElement){

  var imgElements = document.querySelectorAll(classNameImageElement);

 
  let formData = new FormData();
  let count=0;
  if(imgElements.length>0){
  for (let index = 0; index < imgElements.length; index++) {
    if (!(imgElements[index].id!=""&& imgElements[index].id!=null)){

      var imageFile =  await getImageFile(imgElements[index]);
      if (imageFile) {
          formData.append('images[]', imageFile, 'image' + index + '.jpg');
          count++;
      }
 
    }
    
  }

  if(count>0){
    var requestOptions = {
      method: 'POST',
      body: formData,
    };
    formData.append('type',type);
    console.log(formData.getAll('images[]'));
  
    await HomeService.uploadImages(requestOptions);
  
  }


}
      




}

buttonCategoryImageSlider.addEventListener('click',async ()=>{


  let categoryImages= await HomeService.getImgsSlidersByType(selectParent.value);

  let sliderImgs= document.getElementById('carousel-inner-category-images-create');
  sliderImgs.innerHTML="";
  let d="";

  for (let index = 0; index < categoryImages.length; index++) {
    let img=`<div class="carousel-item carousel-item-category-update ${index==0?"active":""}">  <img id=${categoryImages[index].images_sliders_id} class="d-block w-100" src="${en.hostImage+categoryImages[index].img_path}" alt="" /></div>`;
    d+=img;
  }
  sliderImgs.innerHTML=d;

});


//end image slider 





