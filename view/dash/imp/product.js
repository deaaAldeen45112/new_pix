

import * as common from "../../common/common.js";
import { makeToast } from "./toast.js";
import { CategoryService } from "../../service/CategoryService.js";
import { ReviewService } from "../../service/ReviewService.js";


import * as en from "../../common/env.js";

import { ProductService} from "../../service/ProductService.js";
import { Product } from "../../model/product.js";
import { DiscountService } from "../../service/DiscountService.js";
import { Discount } from "../../model/discount.js";
import { PropertyService } from "../../service/PropertyService.js";
import { ProductProperty } from "../../model/property.js";
import { OptionService } from "../../service/OptionService.js";
import { OptionProperty } from "../../model/option.js";
import { InputProp } from "../../model/inputProp.js";
import { InputPropService } from "../../service/InputPropService.js";



let tbodyProduct=document.getElementById("tbody_product");
let listPagenationProduct=document.getElementById('list-pagination-product')
let body=common.getElementByXpath("/html/body");
let buttonConfirmDelete=document.getElementById("delete_confirm_user");



// years

// filter

// let selectParentFilter  =document.getElementById('select_parent-filter');
// let selectChildFilter  =document.getElementById('select_child-filter');
// let selectQuestionYearFilter =document.getElementById('select-question-year-filter');
// let selectQuestionTypeFilter=document.getElementById('select-question-type-filter');
// let checkBoxQuestionIsfreeFilter=document.getElementById('check-box-question-isfree-filter');



// product create 

function fillDropDownByPrimaryCategories(res,selectInput) {
  let optionsParentElement = "";
  console.log("fill");

  optionsParentElement = `<option selected value=0>Choose...</option>`;

   
    res.forEach((element) => {
      optionsParentElement +=
        "<option value=" +
        element.category_id +
        ">" +
        element.category_name +
        "</option>";
    });
    console.log(optionsParentElement);
    selectInput.innerHTML = optionsParentElement;
    // selectCreateParent.innerHTML = optionsParentElement;
  }








let spinnerUserTable=document.getElementById('spinner-user-table');


let productIdNow=0;

let planCategoryIdNow=0;

let pageNumber=1;
let pageSize=5;


document.addEventListener(
    "DOMContentLoaded",
   async () => {
   
    
       let res=  await ProductService.getPaginatedProductsWithCategory(pageNumber,pageSize);
    //   console.log(res);
      fillTable(res.data,tbodyProduct);
      fillPageCom(res.totalPages,listPagenationProduct,res.currentPage);
      addEventListenersByClassName('btn-table-product-delete',function (){productIdNow=this.id;}) 
      addEventListenersByClassName('btn-table-product-imgslider',EventForClickButtonProdcutImageSlider) 
      addEventListenersByClassName('btn-table-product-update', assignUpdateInputs) 
      addEventListenersByClassName('button-page-product',changePageForTable) 
      addEventListenersByClassName('btn-table-review',assignReview);
      addEventListenersByClassName('btn-table-discount',assignDiscount);
      addEventListenersByClassName('btn-table-prop',assignProp);
      
    //     productIdNow=this.id;
    //     let planCategories= await PlanCategoryService.getPlanCategoriesByPlanId(this.id);
    //      fillTableGeneral(planCategories,tbodyPlanCategory,tableStructurePlanCategory);
    //      addEventListenersByClassName('btn-table-planCategory-delete',function (){planCategoryIdNow=this.id;}) 
    //      addEventListenersByClassName('btn-table-planCategory-update',assignPlanCategoryUpdateInputs) 
    //    }) 
   },
    false
  );


  function addEventListenersByClassName(classname,fun){
  
    var element= document.getElementsByClassName(classname);
   for(var i=0;i<element.length;i++){
       
        element[i].addEventListener("click",fun, false);   
   }
  }





      function fillDropDown(res,selectInput,generateOptionHTML) {
    let optionsParentElement = "";
    console.log("fill");
  
    optionsParentElement = `<option selected value=0>Choose...</option>`;
  
     
      res.forEach((element) => {
        optionsParentElement +=generateOptionHTML(element);
      });
      console.log(optionsParentElement);
      selectInput.innerHTML = optionsParentElement;
      // selectCreateParent.innerHTML = optionsParentElement;
      }

    
      function generateOptionHTMLForCategory(element) {
        return `<option value=${element.category_id}>${element.category_name}</option>`;
      }

      function generateOptionHTMLForQuestionType(element) {
        return `<option value=${element.questionTypeId}>${element.typeName}</option>`;
      }

      function generateOptionHTMLForQuestionYear(element) {
        return `<option value=${element}>${element}</option>`;
      }



    //create product
    let buttonCreate=document.getElementById("button_create");
    let selectParent = document.getElementById("select_parents");
    let selectChild = document.getElementById("select_child");
    

    buttonCreate.addEventListener('click',async ()=>{


      let optionsParentElement = "";
      optionsParentElement = "<option selected>Choose...</option>";
    
      let categories=await CategoryService.getCategoriesByParentId(null);
    
      fillDropDownByPrimaryCategories(categories,selectParent);
    
    
    
    })

    selectParent.addEventListener('change',async ()=>{
       
       
      let optionsParentElement = "";
      optionsParentElement = "<option selected>Choose...</option>";
    
      let categories=await CategoryService.getCategoriesByParentId(selectParent.value);
    
      fillDropDownByPrimaryCategories(categories,selectChild);
    
    
    
    
    });
    let inputModalProductDescCreate=document.getElementById('input-modal-product-desc-create');
    let inputModalProductNameCreate=document.getElementById('input-modal-product-name-create');
    let inputModalProductPriceCreate=document.getElementById('input-modal-product-price-create');
    let inputModalProductSummaryCreate=document.getElementById('input-modal-product-summary-create');
    let inputProductImgCreate=document.getElementById('input-product-img-create');
    let buttonModalProductCreate=document.getElementById('button-modal-product-create');

     buttonModalProductCreate.addEventListener('click',async ()=>{
         let product=new Product();
         product.product_name=inputModalProductNameCreate.value;
         product.product_desc=inputModalProductDescCreate.value;
         product.price=inputModalProductPriceCreate.value;
         product.product_summery=inputModalProductSummaryCreate.value;
         product.category_id= selectParent.value !=0 ? selectParent.value:selectChild.value;
         let effect =await ProductService.create(product.toJSON());




         if(effect && inputProductImgCreate.files[0]!=null){
          console.log(effect);
          const formData = new FormData();
          formData.append('image', inputProductImgCreate.files[0]);
          formData.append('id',effect.product_id)
          var result= await ProductService.uploadImage(formData);
      
           if(result!=null){
            makeToast("bg-success");
           
            let res=  await ProductService.getPaginatedProductsWithCategory(pageNumber,pageSize);
            //   console.log(res);
              fillTable(res.data,tbodyProduct);
              fillPageCom(res.totalPages,listPagenationProduct,res.currentPage);
              addEventListenersByClassName('btn-table-product-delete',function (){productIdNow=this.id;}) 
              addEventListenersByClassName('btn-table-product-update', assignUpdateInputs) 
              addEventListenersByClassName('button-page-product',changePageForTable) 
        
           }
      
      
         }



      

     })


    //update product
    let inputModalProductDescUpdate=document.getElementById('input-modal-product-desc-update');
    let inputModalProductNameUpdate=document.getElementById('input-modal-product-name-update');
    let inputModalProductPriceUpdate=document.getElementById('input-modal-product-price-update');
    let inputModalProductSummaryUpdate=document.getElementById('input-modal-product-summary-update');
    let inputProductImgUpdate=document.getElementById('input-product-image-update');
    let buttonModalProductUpdate=document.getElementById('button-modal-product-update');
    let selectParentUpdate = document.getElementById("select_parents-update");
    let selectChildUpdate = document.getElementById("select_child-update");
    let imgProdcutUpdate=document.getElementById("img-prodcut-update");


    inputProductImgUpdate.addEventListener('change',()=>{


      imgProdcutUpdate.src=`${URL.createObjectURL(inputProductImgUpdate.files[0])}`;
    
    
    });

    selectParentUpdate.addEventListener('change',async ()=>{

      if(selectParentUpdate.value!=0){
        let categories=  await CategoryService.getCategoriesByParentId(selectParentUpdate.value);  
        fillDropDown(categories,selectChildUpdate,generateOptionHTMLForCategory);
  
      }
      

    })
    
async function assignUpdateInputs (){
  
  
  productIdNow=this.id;
   
  let prodcutById=await ProductService.getProductWithParentIdById(this.id)

      inputProductImgUpdate.value='';
      inputModalProductDescUpdate.value=prodcutById.product_desc;
      inputModalProductPriceUpdate.value=prodcutById.price;
      inputModalProductNameUpdate.value=prodcutById.product_name;
      inputModalProductSummaryUpdate.value=prodcutById.product_summery;
      
      if(prodcutById.product_img!=null)
      imgProdcutUpdate.src=en.hostImage+prodcutById.product_img;
      
      let categories=  await CategoryService.getCategoriesByParentId(null);  
      fillDropDown(categories,selectParentUpdate,generateOptionHTMLForCategory);
      
      
      selectParentUpdate.value= prodcutById.parent_id==null? prodcutById.category_id : prodcutById.parent_id;
      let subcategories=  await CategoryService.getCategoriesByParentId(selectParentUpdate.value);  
      fillDropDown(subcategories,selectChildUpdate,generateOptionHTMLForCategory);
     
      if(prodcutById.parent_id!=null){

        selectChildUpdate.value=prodcutById.category_id;
      }

}


  
    buttonModalProductUpdate.addEventListener('click',async ()=>{
        let product=new Product();
        product.product_id=productIdNow;
        product.product_desc=inputModalProductDescUpdate.value;
        product.product_name=inputModalProductNameUpdate.value;
        product.price=inputModalProductPriceUpdate.value;
        product.product_summery=inputModalProductSummaryUpdate.value;
        product.category_id= selectChildUpdate.value !=0 ? selectChildUpdate.value:selectParentUpdate.value;
        product.product_img=imgProdcutUpdate.src.replace(en.hostImage, '');
        let effect =await ProductService.update(product.toJSON());



        if(effect&& inputProductImgUpdate.files[0] !=null){
          console.log(effect);
          const formData = new FormData();
          formData.append('image', inputProductImgUpdate.files[0]);
          formData.append('id',effect.product_id)
          var result= await ProductService.uploadImage(formData);
      
           if(result!=null){
            makeToast("bg-success");
          
            let res=  await ProductService.getPaginatedProductsWithCategory(pageNumber,pageSize);
            //   console.log(res);
              fillTable(res.data,tbodyProduct);
              fillPageCom(res.totalPages,listPagenationProduct,res.currentPage);
              addEventListenersByClassName('btn-table-product-delete',function (){productIdNow=this.id;}) 
               addEventListenersByClassName('btn-table-product-update', assignUpdateInputs) 
               addEventListenersByClassName('button-page-product',changePageForTable) 
        
           }
      
      
         }


        // let effect =await ProductService.update(product.toJSON());
        //  if(effect){
        //   makeToast('bg-success');
        //     fillTable(res.data,tbodyProduct);
        //     fillPageCom(res.totalPages,listPagenationProduct,res.currentPage);
        //     addEventListenersByClassName('btn-table-product-delete',function (){productIdNow=this.id;}) 
        //     addEventListenersByClassName('btn-table-product-update', assignUpdateInputs) 
        //     addEventListenersByClassName('button-page-product',changePageForTable) 


        //  }

    })



    // end update prodcut





  // delete product
  let buttonModalProductDelete=document.getElementById('button-modal-product-delete');

     buttonModalProductDelete.addEventListener('click',async ()=>{

        let effect =await ProductService.delete(productIdNow);
          if(effect){
            console.log(productIdNow);
            makeToast('bg-success');
            let res=  await ProductService.getPaginatedProductsWithCategory(pageNumber,pageSize);
            //   console.log(res);
              fillTable(res.data,tbodyProduct);
              fillPageCom(res.totalPages,listPagenationProduct,res.currentPage);
              addEventListenersByClassName('btn-table-product-delete',function (){productIdNow=this.id;}) 
              addEventListenersByClassName('btn-table-product-update', assignUpdateInputs) 
              addEventListenersByClassName('button-page-product',changePageForTable) 


          }
     })

















//  addEventListenersByClassName('back-planCategory',async function (){
 
  
//     let planCategories= await PlanCategoryService.getPlanCategoriesByPlanId(productIdNow);
//      fillTableGeneral(planCategories,tbodyPlanCategory,tableStructurePlanCategory);
//      addEventListenersByClassName('btn-table-planCategory-delete',function (){planCategoryIdNow=this.id;}) 
//      addEventListenersByClassName('btn-table-planCategory-update',assignPlanCategoryUpdateInputs) 
 
//  }) 
 
















  

function fillTable(data,tbody) {
     
        console.log("fill");
        let trAdd="";
        let index=1;
        data.forEach(item => {

          trAdd +=`
          <tr><th scope=row>${index++}</th>
          <td >${item.product_name}</td>
          <td >${item.product_desc}</td>
          <td >${item.product_summery}</td>
          <td >${item.price}</td>
          <td >${item.category_name}</td>
          <td><button id=${item.product_id } data-bs-toggle=\"modal\"  data-bs-target=\"#modal-product-delete\"type=\"button\" class=\"btn btn-danger btn-table-product-delete\">delete</button></td>
          <td><button id=${item.product_id } type=\"button\" class=\"btn btn-info btn-table-product-update\" data-bs-toggle=\"modal\" data-bs-target=\"#modal-product-update\">update</button></td>
          <td><button id=${item.product_id } type=\"button\" class=\"btn btn-info btn-table-product-imgslider\" data-bs-toggle=\"modal\" data-bs-target=\"#model-product-image-slider\">image slider</button></td>
          <td><button id=${item.product_id } type=\"button\" class=\"btn btn-info btn-table-review\" data-bs-toggle=\"modal\" data-bs-target=\"#modal-review\">review</button></td>
          <td><button id=${item.product_id } type=\"button\" class=\"btn btn-info btn-table-prop\" data-bs-toggle=\"modal\" data-bs-target=\"#modal-prop\">property</button></td>
          <td><button id=${item.product_id } type=\"button\" class=\"btn btn-info btn-table-discount\" data-bs-toggle=\"modal\" data-bs-target=\"#modal-discount\">discount</button></td></tr>
     
          `  
        });
      
        tbody.innerHTML = trAdd;
 }
      
  

 function fillTableGeneral(data,tbody,tableStructure) {
     
  console.log("fill");
  let trAdd="";
  let index=1;
  data.forEach(item => {
 

    trAdd+=tableStructure(item,index++);
  });

  tbody.innerHTML = trAdd;
}




function fillPageCom(totalPages,listPagenationElement,pageNumber){
   
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
      listPagenationElement.innerHTML='';
  
    //   if(res.status=="success"){
     

       for (let index = 1; index <= totalPages; index++) {
        trAdd+=`  <li class="page-item ${index==pageNumber?'active':''} ">
        <a class="page-link button-page-product "  >${index}</a>
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
                listPagenationElement.innerHTML=trAdd;
      
    

}
      
   


async function changePageForTable ()
    {
         pageNumber=this.innerHTML;
         let res=  await ProductService.getPaginatedProductsWithCategory(pageNumber,pageSize);
         console.log(res);
         fillTable(res.data,tbodyProduct);
         addEventListenersByClassName('btn-table-product-delete',function (){productIdNow=this.id;}) 
         addEventListenersByClassName('btn-table-product-update', assignUpdateInputs) 

         let childItems= document.getElementsByClassName('button-page-product');
         
         Array.prototype.forEach.call(childItems, function(item) {
            item.parentNode.classList.remove('active');
          });
          this.parentNode.classList.add('active');
         
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





// product image slider 
let inputCategoryImagesCreate=  document.getElementById('input-product-images-create');
let buttonCategoryImageSlider=  document.getElementById('button-product-image-slider');
let buttonSubCategoryImageSlider=  document.getElementById('button-subcategory-image-slider');
inputCategoryImagesCreate.addEventListener('change',()=>{


  let sliderImgs= document.getElementById('carousel-inner-product-images-create');
  
  let d= sliderImgs.innerHTML;
  sliderImgs.innerHTML="";
  for (let index = 0; index < inputCategoryImagesCreate.files.length; index++) {
    let img=`<div class="carousel-item carousel-item-product-update ${index==0 &&d=="" ?"active":""}">  <img class="d-block w-100" src="${URL.createObjectURL(inputCategoryImagesCreate.files[index])}" alt="" /></div>`;
     d+=img;
  }
  sliderImgs.innerHTML=d;



});


let buttonCarouselCategoryImagesDelete=document.getElementById('button-carousel-product-images-delete');

buttonCarouselCategoryImagesDelete.addEventListener('click',async ()=>{

  console.log("okkkkk");

  var activeCarouselItem = document.querySelector('.carousel-item.carousel-item-product-update.active');

 
  if (activeCarouselItem) {
      
      activeCarouselItem.remove();
      if(activeCarouselItem.children[0].id!=""){
      // console.log("Found active carousel item:", activeCarouselItem.children[0].id);
      let effect = await ProductService.deleteProductImgSlider(activeCarouselItem.children[0].id);
      if(effect){


      }
      }


        

  var firstCarouselItem = document.querySelector('.carousel-item-product-update:first-child');
  if (firstCarouselItem) {
              firstCarouselItem.classList.add('active');
          }
  } 
  
  else {
      console.log("No active carousel item found.");
  }
})

let buttonModalCategoryImagesConfirm=document.getElementById('button-modal-product-images-confirm');

buttonModalCategoryImagesConfirm.addEventListener('click', async ()=>{
 
  
 await UploadImages(productIdNow,'.carousel-item-product-update img');
    
 

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


async function UploadImages(id,classNameImageElement){

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
    formData.append('id',id);
    console.log(formData.getAll('images[]'));
  
    await ProductService.uploadImages(requestOptions);
  
  }


}
      




}

async function EventForClickButtonProdcutImageSlider (){

  productIdNow=this.id;
  let categoryImages= await ProductService.getProductImgsSliderByProductId(productIdNow);

  let sliderImgs= document.getElementById('carousel-inner-product-images-create');
  sliderImgs.innerHTML="";
  let d="";

  for (let index = 0; index < categoryImages.length; index++) {
    let img=`<div class="carousel-item carousel-item-product-update ${index==0?"active":""}">  <img id=${categoryImages[index].product_img_slider_id} class="d-block w-100" src="${en.hostImage+categoryImages[index].img_path}" alt="" /></div>`;
    d+=img;
  }
  sliderImgs.innerHTML=d;


};



//end image slider 








// review

// show review 

let pageNumberReview=1;
let tbodyReview=document.getElementById("tbody-review");
let listPagenationReview=document.getElementById('list-pagination-review')
let reviewIdNow;
async function  assignReview(){

 productIdNow=this.id;

 let reviews= await ReviewService.getPaginatedReviewsByProductId(pageNumberReview,pageSize,this.id);
 fillTableReview(reviews.data,tbodyReview);
 fillPageComByButtonClassName(reviews.totalPages,listPagenationReview,reviews.currentPage,'button-page-review');
 addEventListenersByClassName('btn-table-review-delete',function (){reviewIdNow=this.id;});
 addEventListenersByClassName('button-page-review',changePageForReviewTable) 
}

function fillTableReview(data,tbody) {
     
  console.log("fill");
  let trAdd="";
  let index=1;
  data.forEach(item => {

    trAdd +=`
    <tr><th scope=row>${index++}</th>
    <td >${item.user_id}</td>
    <td >${item.review_desc}</td>
    <td >${item.review_star}</td>
    <td><button id=${item.review_id} data-bs-toggle=\"modal\"  data-bs-target=\"#modal-review-delete\"type=\"button\" class=\"btn btn-danger btn-table-review-delete\">delete</button></td>
    </tr>
    `  
    
  });

  tbody.innerHTML = trAdd;
}




// delete review

let buttonConfirmReviewDelete=document.getElementById("delete_confirm_review");

buttonConfirmReviewDelete.addEventListener('click',async ()=>{

  let effect= await ReviewService.delete(reviewIdNow);
  if(effect){   makeToast('bg-success');

  let reviews= await ReviewService.getPaginatedReviewsByProductId(pageNumberReview,pageSize,productIdNow);
  fillTableReview(reviews.data,tbodyReview);
  fillPageComByButtonClassName(reviews.totalPages,listPagenationReview,reviews.currentPage,'button-page-review');
  addEventListenersByClassName('btn-table-review-delete',function (){reviewIdNow=this.id;});
  addEventListenersByClassName('button-page-review',changePageForReviewTable) 
}
})




  


// paging 
function fillPageComByButtonClassName(totalPages,listPagenationElement,pageNumber,buttonClassNamePage){
   
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
  listPagenationElement.innerHTML='';

//   if(res.status=="success"){
 

   for (let index = 1; index <= totalPages; index++) {
    trAdd+=`  <li class="page-item ${index==pageNumber?'active':''} ">
    <a class="page-link ${buttonClassNamePage} "  >${index}</a>
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
            listPagenationElement.innerHTML=trAdd;
  


}

async function changePageForReviewTable ()
{
     pageNumberReview=this.innerHTML;
     let reviews= await ReviewService.getPaginatedReviewsByProductId(pageNumberReview,pageSize,productIdNow);
     fillTableReview(reviews.data,tbodyReview);
     addEventListenersByClassName('btn-table-review-delete',function (){reviewIdNow=this.id;}) 
   
     let childItems= document.getElementsByClassName('button-page-review');
     
     Array.prototype.forEach.call(childItems, function(item) {
        item.parentNode.classList.remove('active');
      });
      this.parentNode.classList.add('active');
     
}

// end review


// discount


let discountIdNow;
let buttonConfirmDiscountDelete=document.getElementById("delete_confirm_discount");
let tbodyDiscount=document.getElementById("tbody-discount");


async function  assignDiscount(){

  productIdNow=this.id;

 let discounts= await DiscountService.getDiscountWithQuantityByProductId(this.id);
 fillTableDiscount(discounts,tbodyDiscount);
 addEventListenersByClassName('btn-table-discount-delete',function (){discountIdNow=this.id;});
 addEventListenersByClassName('btn-table-discount-update',assignUpdateDiscount);
}

function fillTableDiscount(data,tbody) {
     
  console.log("fill");
  let trAdd="";
  let index=1;
  data.forEach(item => {

    trAdd +=`
    <tr><th scope=row>${index++}</th>
    <td >${item.quantity}</td>
    <td >${item.discount_rate}</td>
    <td><button id=${item.discount_with_quantity_id} data-bs-toggle=\"modal\"  data-bs-target=\"#modal-discount-delete\"type=\"button\" class=\"btn btn-danger btn-table-discount-delete\">delete</button></td>
    <td><button id=${item.discount_with_quantity_id} data-bs-toggle=\"modal\"  data-bs-target=\"#modal-discount-update\"type=\"button\" class=\"btn btn-info btn-table-discount-update\">update</button></td>
    </tr>
    `  
    
  });

  tbody.innerHTML = trAdd;
}



// delete discount

buttonConfirmDiscountDelete.addEventListener('click',async ()=>{

  let effect= await DiscountService.delete(discountIdNow);
  if(effect){   makeToast('bg-success');

  let discounts= await DiscountService.getDiscountWithQuantityByProductId(productIdNow);
  fillTableDiscount(discounts,tbodyDiscount);
  addEventListenersByClassName('btn-table-discount-delete',function (){discountIdNow=this.id;});
  addEventListenersByClassName('btn-table-discount-update',assignUpdateDiscount);
}
})



async function assignUpdateDiscount(){
  discountIdNow=this.id;
  let discount= await DiscountService.readById(discountIdNow);
  inputModalDiscountQuantityUpdate.value=discount.quantity;
  inputModalDiscountRateUpdate.value=discount.discount_rate;



}
// create discount

let buttonCreatDiscount=document.getElementById("button-modal-discount-create");
let inputModalDiscountRateCreate=document.getElementById("input-modal-discount-discount-rate-create");
let inputModalDiscountQuantityCreate=document.getElementById("input-modal-discount-quantity-create");


buttonCreatDiscount.addEventListener('click',async ()=>{

  let discount = new Discount();
  discount.discount_rate=inputModalDiscountRateCreate.value;
  discount.quantity=inputModalDiscountQuantityCreate.value;
  discount.product_id=productIdNow;
 let effect= await DiscountService.create(discount.toJSON());
 if(effect){
  makeToast('bg-success');

  let discounts= await DiscountService.getDiscountWithQuantityByProductId(productIdNow);
  fillTableDiscount(discounts,tbodyDiscount);
  addEventListenersByClassName('btn-table-discount-delete',function (){discountIdNow=this.id;});
  addEventListenersByClassName('btn-table-discount-update',assignUpdateDiscount);

 }
})


// update discount

let buttonUpdateDiscount=document.getElementById("button-modal-discount-update");
let inputModalDiscountRateUpdate=document.getElementById("input-modal-discount-discount-rate-update");
let inputModalDiscountQuantityUpdate=document.getElementById("input-modal-discount-quantity-update");


buttonUpdateDiscount.addEventListener('click',async ()=>{

  let discount = new Discount();
  discount.discount_with_quantity_id=discountIdNow;
  discount.discount_rate=inputModalDiscountRateUpdate.value;
  discount.quantity=inputModalDiscountQuantityUpdate.value;
  discount.product_id=productIdNow;
 let effect= await DiscountService.update(discount.toJSON());
 if(effect){
  makeToast('bg-success');

  let discounts= await DiscountService.getDiscountWithQuantityByProductId(productIdNow);
  fillTableDiscount(discounts,tbodyDiscount);
  addEventListenersByClassName('btn-table-discount-delete',function (){discountIdNow=this.id;});
  addEventListenersByClassName('btn-table-discount-update',assignUpdateDiscount);

 }
})

// end discount



// prop

let propIdNow;
let buttonConfirmPropDelete=document.getElementById("delete_confirm_prop");
let tbodyProp=document.getElementById("tbody-prop");


async function  assignProp(){

  productIdNow=this.id;

 let props= await PropertyService.getProductPropertiesByProductId(this.id);
 fillTableProp(props,tbodyProp);
 addEventListenersByClassName('btn-table-prop-delete',function (){propIdNow=this.id;});
 addEventListenersByClassName('btn-table-prop-update',assignUpdateProp);
 addEventListenersByClassName('btn-table-option',assignOption);
 addEventListenersByClassName('btn-table-input',assignInputProp);
}



function fillTableProp(data,tbody) {
     
  console.log("fill");
  let trAdd="";
  let index=1;
  data.forEach(item => {

    trAdd +=`
    <tr><th scope=row>${index++}</th>
    <td >${item.product_property_name}</td>
    <td >${item.product_property_desc}</td>
    <td >${ item.type_id}</td>
    
    <td><button id=${item.product_property_id} data-bs-toggle=\"modal\"  data-bs-target=\"#modal-prop-delete\"type=\"button\" class=\"btn btn-danger btn-table-prop-delete\">delete</button></td>
    <td><button id=${item.product_property_id} data-bs-toggle=\"modal\"  data-bs-target=\"#modal-prop-update\"type=\"button\" class=\"btn btn-info btn-table-prop-update\">update</button></td>
    
    `;
   if(item.type_id==1){
    trAdd +=`<td><button id=${item.product_property_id} data-bs-toggle=\"modal\"  data-bs-target=\"#modal-option\"type=\"button\" class=\"btn btn-info btn-table-option\">Selection</button></td>
    `;
   }
   else if(item.type_id==2)
   {
    trAdd +=`<td><button id=${item.product_property_id} data-bs-toggle=\"modal\"  data-bs-target=\"#modal-option\"type=\"button\" class=\"btn btn-info btn-table-option\">Options</button></td>
    `;
   }
   else if(item.type_id==3)
   {
    trAdd +=`<td><button id=${item.product_property_id} data-bs-toggle=\"modal\"  data-bs-target=\"#modal-option\"type=\"button\" class=\"btn btn-info btn-table-option\">Radio Button</button></td>
    `;
   }
   else if(item.type_id==4)
   {
    trAdd +=`<td><button id=${item.product_property_id} data-bs-toggle=\"modal\"  data-bs-target=\"#modal-input\"type=\"button\" class=\"btn btn-info btn-table-input\">input</button></td>
    `;
   }

   trAdd +=`</tr>`;
    
    
  });

  tbody.innerHTML = trAdd;
}



// create prop

let buttonCreateProp=document.getElementById("button-modal-prop-create");
let inputModalPropNameCreate=document.getElementById("input-modal-prop-name-create");
let inputModalPropDescCreate=document.getElementById("input-modal-prop-des-create");
let selectTypeCreate=document.getElementById("select-prop-type");

buttonCreateProp.addEventListener('click',async ()=>{

  let prop = new ProductProperty();
  prop.product_property_name=inputModalPropNameCreate.value;
  prop.product_property_desc=inputModalPropDescCreate.value;
  prop.product_id=productIdNow;
  prop.type_id=selectTypeCreate.value;
 let effect= await PropertyService.create(prop.toJSON());
 if(effect){
  makeToast('bg-success');

  let props= await PropertyService.getProductPropertiesByProductId(productIdNow);
  fillTableProp(props,tbodyProp);
  addEventListenersByClassName('btn-table-prop-delete',function (){propIdNow=this.id;});
  addEventListenersByClassName('btn-table-prop-update',assignUpdateProp);
  addEventListenersByClassName('btn-table-option',assignOption);
  addEventListenersByClassName('btn-table-input',assignInputProp);
  //addEventListenersByClassName('btn-table-input',assign);
 }
})

// update prop 

let buttonUpdateProp=document.getElementById("button-modal-prop-update");
let inputModalPropNameUpdate=document.getElementById("input-modal-prop-name-update");
let inputModalPropDescUpdate=document.getElementById("input-modal-prop-des-update");
let selectTypeUpdate=document.getElementById("select-prop-type-update");

buttonUpdateProp.addEventListener('click',async ()=>{

  let prop = new ProductProperty();
  prop.product_property_id=propIdNow;
  prop.product_property_name=inputModalPropNameUpdate.value;
  prop.product_property_desc=inputModalPropDescUpdate.value;
  prop.product_id=productIdNow;
  prop.type_id=selectTypeUpdate.value;

 let effect= await PropertyService.update(prop.toJSON());
 if(effect){
  makeToast('bg-success');

  let props= await PropertyService.getProductPropertiesByProductId(productIdNow);
  fillTableProp(props,tbodyProp);
  addEventListenersByClassName('btn-table-prop-delete',function (){propIdNow=this.id;});
  addEventListenersByClassName('btn-table-prop-update',assignUpdateProp);
  addEventListenersByClassName('btn-table-option',assignOption);
  addEventListenersByClassName('btn-table-input',assignInputProp);

 }
})


// delete prop

buttonConfirmPropDelete.addEventListener('click',async ()=>{

  let effect= await PropertyService.delete(propIdNow);
  if(effect){  
  makeToast('bg-success');
  let props= await PropertyService.getProductPropertiesByProductId(productIdNow);
  fillTableProp(props,tbodyProp);
  addEventListenersByClassName('btn-table-prop-delete',function (){propIdNow=this.id;});
  addEventListenersByClassName('btn-table-prop-update',assignUpdateProp);
  addEventListenersByClassName('btn-table-option',assignOption);
  addEventListenersByClassName('btn-table-input',assignInputProp);

}
})


async function assignUpdateProp(){
  propIdNow=this.id;
  let prop= await PropertyService.readById(propIdNow);
  inputModalPropNameUpdate.value=prop.product_property_name;
  inputModalPropDescUpdate.value=prop.product_property_desc;
  selectTypeUpdate.value=prop.type_id;


}


// end prop



// option
let optionIdNow;
let buttonConfirmOptionDelete=document.getElementById("delete_confirm_option");
let tbodyOption=document.getElementById("tbody-option");


async function  assignOption(){

  propIdNow=this.id;

 let props= await OptionService.getOptionProductPropertiesByProductPropertyId(this.id);
 fillTableOption(props,tbodyOption);
 addEventListenersByClassName('btn-table-option-delete',function (){optionIdNow=this.id;});
 addEventListenersByClassName('btn-table-option-update',assignUpdateOption);
}



function fillTableOption(data,tbody) {
     
  console.log("fill");
  let trAdd="";
  let index=1;
  data.forEach(item => {

    trAdd +=`
    <tr><th scope=row>${index++}</th>
    <td >${item.option_name}</td>
    <td >${item.option_price}</td>
    <td >${ item.option_default}</td>
    <td><button id=${item.option_product_property_id} data-bs-toggle=\"modal\"  data-bs-target=\"#modal-option-delete\"type=\"button\" class=\"btn btn-danger btn-table-option-delete\">delete</button></td>
    <td><button id=${item.option_product_property_id} data-bs-toggle=\"modal\"  data-bs-target=\"#modal-option-update\"type=\"button\" class=\"btn btn-info btn-table-option-update\">update</button></td>
    </tr>
    `  
    
  });

  tbody.innerHTML = trAdd;
}


 // create option 
  


let buttonCreateOption=document.getElementById("button-modal-option-create");
let inputModalOptionNameCreate=document.getElementById("input-modal-option-name-create");
let inputModalOptionPriceCreate=document.getElementById("input-modal-option-price-create");
let inputModalOptionImgCreate=document.getElementById("input-option-img-create");
let inputModalOptionDefaultCreate=document.getElementById("input-modal-option-default-create");


buttonCreateOption.addEventListener('click',async ()=>{

  let option = new OptionProperty();
  option.option_name=inputModalOptionNameCreate.value;
  option.option_price=inputModalOptionPriceCreate.value;
  option.option_default=inputModalOptionDefaultCreate.checked==false ? 0 :1 ;
  option.product_property_id=propIdNow;


  let effect= await OptionService.create(option.toJSON());
 if(effect ){
  
   

 
  let props= await OptionService.getOptionProductPropertiesByProductPropertyId(propIdNow);
  fillTableOption(props,tbodyOption);
  addEventListenersByClassName('btn-table-option-delete',function (){optionIdNow=this.id;});
  addEventListenersByClassName('btn-table-option-update',assignUpdateOption);
 }

  if(effect && inputModalOptionImgCreate.files[0]!=null)
{

         const formData = new FormData();
          formData.append('image', inputModalOptionImgCreate.files[0]);
          formData.append('id',effect.option_product_property_id)
          var result= await OptionService.uploadImage(formData);
  
}
makeToast('bg-success');

})


// option update
let buttonUpdateOption=document.getElementById("button-modal-option-update");
let inputModalOptionNameUpdate=document.getElementById("input-modal-option-name-update");
let inputModalOptionPriceUpdate=document.getElementById("input-modal-option-price-update");
let inputModalOptionImgUpdate=document.getElementById("input-option-img-update");
let inputModalOptionDefaultUpdate=document.getElementById("input-modal-option-default-update");
let imgOptionUpdate=document.getElementById("img-option-update");

buttonUpdateOption.addEventListener('click',async ()=>{

  let option = new OptionProperty();
  option.option_name=inputModalOptionNameUpdate.value;
  option.option_price=inputModalOptionPriceUpdate.value;
  option.option_default=inputModalOptionDefaultUpdate.checked==false ? 0 :1 ;
  option.product_property_id=propIdNow;
  option.option_product_property_id=optionIdNow;
  option.option_img=imgOptionUpdate.src.replace(en.hostImage, '');

  let effect= await OptionService.update(option.toJSON());
 if(effect ){
  
   

 
  let props= await OptionService.getOptionProductPropertiesByProductPropertyId(propIdNow);
  fillTableOption(props,tbodyOption);
  addEventListenersByClassName('btn-table-option-delete',function (){optionIdNow=this.id;});
  addEventListenersByClassName('btn-table-option-update',assignUpdateOption);
 }

  if(effect && inputModalOptionImgUpdate.files[0]!=null)
{

         const formData = new FormData();
          formData.append('image', inputModalOptionImgUpdate.files[0]);
          formData.append('id',effect.option_product_property_id)
          var result= await OptionService.uploadImage(formData);
  
}
makeToast('bg-success');

})



inputModalOptionImgUpdate.addEventListener('change',()=>{


  imgOptionUpdate.src=`${URL.createObjectURL(inputModalOptionImgUpdate.files[0])}`;


});




// end option update 




// option delete 
buttonConfirmOptionDelete.addEventListener('click',async ()=>{

  let effect= await OptionService.delete(optionIdNow);
  if(effect){  
  makeToast('bg-success');
  let props= await OptionService.getOptionProductPropertiesByProductPropertyId(propIdNow);
  fillTableOption(props,tbodyOption);
  addEventListenersByClassName('btn-table-option-delete',function (){optionIdNow=this.id;});
  addEventListenersByClassName('btn-table-option-update',assignUpdateOption);
}
})




async function assignUpdateOption (){
  
  
  optionIdNow=this.id;
   
  let optionById=await OptionService.readById(this.id)

      inputModalOptionImgUpdate.value='';
      inputModalOptionNameUpdate.value=optionById.option_name;
      inputModalOptionPriceUpdate.value=optionById.option_price;
      inputModalOptionDefaultUpdate.checked=optionById.option_default==0 ?false :true;
      
      if(optionById.option_img!=null)
      imgOptionUpdate.src=en.hostImage+optionById.option_img;

    
     
  
}


// end option



// input

let buttonModalInput=document.getElementById("button-modal-input");
let inputModalInputForNum=document.getElementById("input-modal-input-for-num");
let inputModalInputPrice=document.getElementById("input-modal-input-price"); 

buttonModalInput.addEventListener('click',async ()=>{
 let inputProp= new InputProp();

 inputProp.price=inputModalInputPrice.value;
 inputProp.for_num=inputModalInputForNum.value;
 inputProp.property_id=propIdNow;

  if(inputPropNowId){
    inputProp.input_product_property_id=inputPropNowId;
    let res= await InputPropService.update(inputProp);
    if(res){ makeToast('bg-success');}
  }
 else {
    let res= await  InputPropService.create(inputProp);
    if(res){ makeToast('bg-success');}
 }


});
let inputPropNowId;
async function assignInputProp(){
  propIdNow=this.id;
  try{
    
    let inputPropNow= await  InputPropService.getInputProductPropertiesByProductPropertyId(propIdNow);
     console.log(inputPropNow);
inputModalInputPrice.value=inputPropNow.price;
inputModalInputForNum.value=inputPropNow.for_num;
inputPropNowId=inputPropNow.input_product_property_id;
  }
  catch(e){
 
 
  } 

}




// end input