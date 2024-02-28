
import {CategoryService } from "../pixfront/view/service/CategoryService.js";
import {ProductService } from "../pixfront/view/service/ProductService.js";
import * as en from "../pixfront/view/common/env.js";
console.log("deaa");


if(localStorage.getItem('subId')!=null){

    console.log("i here "); 
    let id =localStorage.getItem('subId');
    console.log(localStorage.getItem('subId'));

    let category=await CategoryService.readById(id);
    let title =document.getElementsByClassName('cat-title')[0];
    let parCatDescription =document.getElementsByClassName('par-cat-description')[0];

    let titlePage=document.getElementById('title-page');
    title.innerHTML=category.category_name;
    parCatDescription.innerHTML=category.category_desc;
    titlePage.innerHTML=category.category_name;
    let paraDes=document.getElementById("para-desc");

    paraDes.innerHTML=category.category_desc;

    let titleDesc=document.getElementById("title-desc");
    titleDesc.innerHTML=category.category_name+" 2024 From  your webiste name";
    let titleOnline=document.getElementById("title-desc-online");

    titleOnline.innerHTML=category.category_name + " online";
    let imgs=await CategoryService.getCategoryImgsSliderByCategoryId(id);
    let liTrackCategory=document.getElementById('li-track-category');
    let divSubsests=document.getElementById('div-subsests');
    liTrackCategory.innerHTML=category.category_name;
        console.log("here windows")
        let slider = document.getElementById('silder-cat-img');
    
    
        let imgTags="";
       for(let i=0;i<imgs.length;i++)
       {
        imgTags+=`<div class="slide-container keen-slider__slide" style="min-width: calc(100% - 0px); max-width: calc(100% - 0px); transform: translate3d(-670px, 0px, 0px);">
           <div class="img-overlay" style="background-color: #;">
       
               <picture class=" d-lg-block">
                   <img src="${en.hostImage+imgs[i].img_path}"  alt="" class="img-fluid lazyloaded" width="1340" height="777" fetchpriority="low">
               </picture>
               <img class="d-md-block zoom-svg zoom-main-banner" src="../images/zoom-icon.svg" alt="zoom icon">
           </div>
       </div>`
         
       }
      // slider.innerHTML=imgTags;
      let products= await ProductService.getProductByCategoryId(id);

       let pro="";
       for(let i=0;i<products.length;i++){

        pro+=`<div class="catalogue-btn catalogue-col-5">
        <div class="card-btn">
            <a href="wall/index.html" data-page-id="6Y6vjkmEquCD12jWnPWDJ6" data-page-type="product" class="category-page-link">
                <div class="image-container">
                    <div class="image-hover"></div>
                    <picture class="">
                    <img src="${en.hostImage+products[i].product_img}" alt="" class=" ls-is-cached lazyloaded" width="600" height="600">
                    </picture>
                </div>
            </a>
            <div class="card-body">
                <a href="wall/index.html" class="card-title category-page-link" data-page-id="6Y6vjkmEquCD12jWnPWDJ6" data-page-type="product">
                    ${products[i].product_name}
                </a>
            </div>
        </div>

    </div>`;

       }

       divSubsests.innerHTML+=pro;

}



function addEventListenersByClassName(classname,fun){
  
    var element= document.getElementsByClassName(classname);
   for(var i=0;i<element.length;i++){
       
        element[i].addEventListener("click",fun, false);   
   }
  }
















// document.addEventListener(
//     "DOMContentLoaded",
//    async () => {

//     //  desktopMenu=document.getElementById("desktop-menu");
//     //   let categories= await CategoryService.getCategoriesByParentId(null);
//     //   console.log(categories);
//     //   fillCategoryHeaderForDesktop(categories,desktopMenu);
     
//     //   addEventListenersByClassName('nav-cat',assignSubCategory)
//    });

//    window.onload = async function () {
 

//     if (window.innerWidth < 1200) {

//         let categories= await CategoryService.getAllCategoriesWithSubcategoriesAndProducts();
//         fillCategoryHeaderForMobile(categories,divMobileCols);
//         addEventListenersByClassName('nav-subcat',assignSubCategoryForMob);
    
    
        
        
//         for (let i = 0; i < categories.length; i++) {
            
      
    
//         //console.log(categories);
    
//                  // let elements=document.getElementsByClassName("nav-subcat");
//             if(categories[i].subcategories.length>0)    
//             fillSubCategoryHeaderForMob(categories[i].subcategories,divMobSubCols,i)
            
//         }
    
       
//     } else {
//         desktopMenu=document.getElementById("desktop-menu");
//         let categories= await CategoryService.getCategoriesByParentId(null);
//         console.log(categories);
//         fillCategoryHeaderForDesktop(categories,desktopMenu);
       
//         addEventListenersByClassName('nav-cat',assignSubCategory);
    
    
//     }


 




//  }
//   async function assignSubCategory(){
//    let parentId =this.getAttribute("data-cat-id");
//     let index = this.getAttribute("data-index");

   
//     let categories= await CategoryService.getAllCategoriesWithProductsByParentId(parentId);

//     console.log(categories);

//               let elements=document.getElementsByClassName("nav-cat");
//         if(categories.length>0)    
//         fillSubCategoryHeaderForDesktop(categories,this,index)
        
       

//          Array.prototype.forEach.call(elements, function(item) {
//             item.classList.remove('active');
//           });
//           this.classList.add("active");

        
//    }



// async function assignSubCategoryForMob(){
//     // let parentId =this.getAttribute("data-cat-id");
//     // let index = this.getAttribute("data-index");

   
//     // let categories= await CategoryService.getAllCategoriesWithProductsByParentId(parentId);

//     // console.log(categories);

//     //           let elements=document.getElementsByClassName("nav-subcat");
//     //     if(categories.length>0)    
//     //     fillSubCategoryHeaderForMob(categories,divMobSubCols,index)
        
       

//         //  Array.prototype.forEach.call(elements, function(item) {
//         //     item.classList.remove('active');
//         //   });
//         //   this.classList.add("active");


// }
//    function fillCategoryHeaderForMobile(data,tbody){

//     console.log("fill");
//     tbody.innerHTM="";
//     let trAdd="";
//     let index=0;
//     data.forEach(item => {
  
//       trAdd +=`
//       <div class="col-mobile nav-subcat" data-index=${index} data-cat-id=${item.category_id} >
//       <div id="${index}" class="menu_tab_mob">
//       ${item.category_name}
//           <i class="fal fa-arrow-right"></i>
//       </div>
//   </div>
 
//       `  
//       index++;
//     });
  
//     tbody.innerHTML = trAdd;


//    }

//    function fillCategoryHeaderForDesktop(data,tbody) {
     
//     console.log("fill");
//     let trAdd="";
//     let index=0;
//     data.forEach(item => {

//       trAdd +=`
//       <nav   id="menu_${index}" data-cat-id=${item.category_id} data-index=${index}  class="menu_tab col dropdown nav-cat">
//       <span>${item.category_name}</span>
//       </nav>
 
//       `  
//       index++;
//     });
  
//     tbody.innerHTML = trAdd;
// }
// function fillSubCategoryHeaderForDesktop(data,tbody,index) {
     
//     console.log("fill");
//     var spanCategoryName = tbody.querySelector(':first-child');
//     tbody.innerHTML="";

//     let column=spanCategoryName.outerHTML+`<div
//     class="mega_menu_container menu_${index} dropdown-menu"
//     aria-labelledby="dropdownMenuButton">
//     <nav class="mega_menu">
//         <div class="content">
//             <div class="row col-12">
           
//             `;

//            let numberOfSubForCol= Math.floor((data.length / Math.min(4,data.length)));
//            let start=0;
//            let end= numberOfSubForCol+((data.length > 4 && 0< (data.length%4))? 1 : 0);
//           for(let col=0;col<Math.min(4,data.length);col++)
//           {
          


//              column+=` 
//             <div class="col">
             
//             `
//             //(data.length / Math.min(4,data.length)) + ((data.length > 4 && col< (data.length%4))? 1 : 0)
//             for (let subIndex = start ; subIndex <end; subIndex++) {
             
//              column+=`<ul class="nav navDesktop">
//              <li class="title">
//                  <hr><a
//                      href="index.html"
//                      data-page-type="category"
//                     >
//                      ${data[subIndex].category_name}
//                  </a>
//              </li>
//              </ul>`;
//              column+=`<div  class="contentLink">
//              `;

//              for(let proIndex=0;proIndex<data[subIndex].products.length; proIndex++)
//              {
//                        column+=`  
//                        <li class="link">
//                        <a
//                           class="mega-menu-link"
//                           href="pocket/index.html">
//                            ${data[subIndex].products[proIndex].product_name}
//                        </a>
//                     </li>`    
//              }
//            column+=' </div>'  


//             }
           

//             start=end;
//             end=end+numberOfSubForCol+((data.length > 4 && (col + 1 )< (data.length%4))? 1 : 0);
//             column+=' </div>'
//           }





            
//           column +=` 
//             </div>
//             </div>
//         </nav>
//       </div>
//             `  

  
//     tbody.innerHTML= column;
// }
// function fillSubCategoryHeaderForMob(data,tbody,index) {
     
//     console.log("fill");
  


//     let column=`
//     <div class="col-mobile">
//     <div id="menu_${index}_mob_content" class="submenu_mob d-none">
//                                             <div id="${index}"
//                                                 class="menu_tab_mob d-flex d-sm-none">
//                                                 <div>
//                                                     <i class="fal"></i>
//                                                    ${index}
//                                                 </div>
//                                             </div>`;

        
          
//             for (let subIndex = 0 ; subIndex <data.length; subIndex++) {
             
//              column+=`<div class="nav">
//              <div class="title">
//                  <a
//                      href="../fast-lane/250-business-cards-quick-online-order-free-delivery/index.html"
//                      data-page-type="category"
//                     >
//                     ${data[subIndex].category_name}
//                  </a>
//              </div>
//              <div class="links_container">
//                 `;
           

//              for(let proIndex=0;proIndex<data[subIndex].products.length; proIndex++)
//              {
//                        column+=`  

//                        <div class="link">
//                        <a
//                            href="../business-cards/classic-business-cards/index.html"
//                            class="VAR-DLZJVWKW  mega-menu-link"
//                            data-page-type="product"
//                           >
//                            ${data[subIndex].products[proIndex].product_name}
  
//                        </a>
//                    </div>
//                     `    
//              }
//             column+=' </div> </div>'  
//             }
//             column+=' </div> </div>'  

//     tbody.innerHTML+= column;
// }



