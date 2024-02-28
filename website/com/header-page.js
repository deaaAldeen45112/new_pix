
import {CategoryService } from "../pixfront/view/service/CategoryService.js";







let desktopMenu;

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

   window.onload = async function () {
 
   
    if (window.innerWidth < 1200) {
        let divMobileCols =document.getElementById('div-mobile-cols');
        let divMobSubCols=document.getElementById('div-mob-sub-cols');

        let categories= await CategoryService.getAllCategoriesWithSubcategoriesAndProducts();
        fillCategoryHeaderForMobile(categories,divMobileCols);
        addEventListenersByClassName('nav-subcat',assignSubCategoryForMob);
    
        
        
        for (let i = 0; i < categories.length; i++) {
            

                 // let elements=document.getElementsByClassName("nav-subcat");
            if(categories[i].subcategories.length>0)    
            fillSubCategoryHeaderForMob(categories[i].subcategories,divMobSubCols,i,categories[i].category_name)
            addEventListenersByClassName('nav-sub-mob',function(){
                let id=  this.getAttribute('data-cat-id');
                console.log(id);
                localStorage.setItem('subId',id);
                window.location="./category-page.php";
    
    
              });
        }
    
       
    } else {
        desktopMenu=document.getElementById("desktop-menu");
        let categories= await CategoryService.getCategoriesByParentId(null);
        console.log(categories);
        fillCategoryHeaderForDesktop(categories,desktopMenu);
       
        addEventListenersByClassName('nav-cat',assignSubCategory);
    
    
    }


 




 }
  async function assignSubCategory(){
   let parentId =this.getAttribute("data-cat-id");
    let index = this.getAttribute("data-index");

   
    let categories= await CategoryService.getAllCategoriesWithProductsByParentId(parentId);

    console.log(categories);

              let elements=document.getElementsByClassName("nav-cat");
        if(categories.length>0)    
        fillSubCategoryHeaderForDesktop(categories,this,index)
        
       

         Array.prototype.forEach.call(elements, function(item) {
            item.classList.remove('active');
          });
          this.classList.add("active");
          
          addEventListenersByClassName('nav-sub-desk',function(){
            let id=  this.getAttribute('data-cat-id');
            console.log(id);
            localStorage.setItem('subId',id);
            window.location="./category-page.php";


          });
        
   }



async function assignSubCategoryForMob(){
    // let parentId =this.getAttribute("data-cat-id");
    // let index = this.getAttribute("data-index");

   
    // let categories= await CategoryService.getAllCategoriesWithProductsByParentId(parentId);

    // console.log(categories);

    //           let elements=document.getElementsByClassName("nav-subcat");
    //     if(categories.length>0)    
    //     fillSubCategoryHeaderForMob(categories,divMobSubCols,index)
        
       

        //  Array.prototype.forEach.call(elements, function(item) {
        //     item.classList.remove('active');
        //   });
        //   this.classList.add("active");


}
   function fillCategoryHeaderForMobile(data,tbody){

    console.log("fill");
    tbody.innerHTM="";
    let trAdd="";
    let index=0;
    data.forEach(item => {
  
      trAdd +=`
      <div class="col-mobile nav-subcat" data-index=${index} data-cat-id=${item.category_id} >
      <div id="${index}" class="menu_tab_mob">
      ${item.category_name}
          <i class="fal fa-arrow-right"></i>
      </div>
  </div>
 
      `  
      index++;
    });
  
    tbody.innerHTML = trAdd;


   }

   function fillCategoryHeaderForDesktop(data,tbody) {
     
    console.log("fill");
    let trAdd="";
    let index=0;
    data.forEach(item => {

      trAdd +=`
      <nav   id="menu_${index}" data-cat-id=${item.category_id} data-index=${index}  class="menu_tab col dropdown nav-cat">
      <span>${item.category_name}</span>
      </nav>
 
      `  
      index++;
    });
  
    tbody.innerHTML = trAdd;
}
function fillSubCategoryHeaderForDesktop(data,tbody,index) {
     
    console.log("fill");
    var spanCategoryName = tbody.querySelector(':first-child');
    tbody.innerHTML="";

    let column=spanCategoryName.outerHTML+`<div
    class="mega_menu_container menu_${index} dropdown-menu"
    aria-labelledby="dropdownMenuButton">
    <nav class="mega_menu">
        <div class="content">
            <div class="row col-12">
           
            `;

           let numberOfSubForCol= Math.floor((data.length / Math.min(4,data.length)));
           let start=0;
           let end= numberOfSubForCol+((data.length > 4 && 0< (data.length%4))? 1 : 0);
          for(let col=0;col<Math.min(4,data.length);col++)
          {
          


             column+=` 
            <div class="col">
             
            `
            //(data.length / Math.min(4,data.length)) + ((data.length > 4 && col< (data.length%4))? 1 : 0)
            for (let subIndex = start ; subIndex <end; subIndex++) {
             
             column+=`<ul data-cat-id=${data[subIndex].category_id} class="nav navDesktop nav-sub-desk">
             <li class="title">
                 <hr><a
                    
                     data-page-type="category"
 
                    >
                     ${data[subIndex].category_name}
                 </a>
             </li>
             </ul>`;
             column+=`<div  class="contentLink">
             `;

             for(let proIndex=0;proIndex<data[subIndex].products.length; proIndex++)
             {
                       column+=`  
                       <li class="link">
                       <a
                          class="mega-menu-link"
                          >
                           ${data[subIndex].products[proIndex].product_name}
                       </a>
                    </li>`    
             }
           column+=' </div>'  


            }
           

            start=end;
            end=end+numberOfSubForCol+((data.length > 4 && (col + 1 )< (data.length%4))? 1 : 0);
            column+=' </div>'
          }





            
          column +=` 
            </div>
            </div>
        </nav>
      </div>
            `  

  
    tbody.innerHTML= column;
}
function fillSubCategoryHeaderForMob(data,tbody,index,categoryName) {
     
    console.log("fill");
  


    let column=`
    <div class="col-mobile">
    <div id="menu_${index}_mob_content" class="submenu_mob d-none">
                                            <div id="${index}"
                                                class="menu_tab_mob d-flex d-sm-none">
                                                <div>
                                                    <i class="fal"></i>
                                                   ${categoryName}
                                                </div>
                                            </div>`;

        
          
            for (let subIndex = 0 ; subIndex <data.length; subIndex++) {
             
             column+=`<div data-cat-id=${data[subIndex].category_id}  class="nav nav-sub-mob">
             <div class="title">
                 <a
                     
                     data-page-type="category"
                    >
                    ${data[subIndex].category_name}
                 </a>
             </div>
             <div class="links_container">
                `;
           

             for(let proIndex=0;proIndex<data[subIndex].products.length; proIndex++)
             {
                       column+=`  

                       <div class="link">
                       <a
                           
                           class="VAR-DLZJVWKW  mega-menu-link"
                           data-page-type="product"
                          >
                           ${data[subIndex].products[proIndex].product_name}
  
                       </a>
                   </div>
                    `    
             }
            column+=' </div> </div>'  
            }
            column+=' </div> </div>'  

    tbody.innerHTML+= column;
}



