


import {CategoryService } from "../pixfront/view/service/CategoryService.js";
import {ProductService } from "../pixfront/view/service/ProductService.js";
import * as en from "../pixfront/view/common/env.js";


let categoryName=document.getElementById('home-category-name');
let categoryDesc=document.getElementById('home-category-desc');
let categoryImg=document.getElementById('home-category-img');

let divSubcategoriesShow=document.getElementById('div-subcategories-show');




let divSubcategoriesShowSecond=document.getElementById('div-subcategories-show-second');

let categoryNameSecond=document.getElementById('category-title-second');
let categoryDescSecond=document.getElementById('category-desc-second');




let firstCategory=await CategoryService.getRandomCategoryWithSubcategories(0);
let secondCategory=await CategoryService.getRandomCategoryWithSubcategories(firstCategory.category_id);




   categoryName.innerHTML=firstCategory.category_name;
   categoryDesc.innerHTML=firstCategory.category_desc;
   categoryImg.src=en.hostImage+firstCategory.category_img;

   categoryNameSecond.innerHTML= secondCategory.category_name;
   categoryDescSecond.innerHTML= secondCategory.category_desc;




for(let i=0;i<Math.min(firstCategory.subcategories.length,6);i++){

    divSubcategoriesShow.innerHTML+=`
    <div class="col-6 col-lg-2">
    <div class="card-btn">
    <a href="https://www.pixartprinting.com/printing-magazines-books-catalogues/magazines/" data-page-id="7iuNdt1YkCIIMrWz9vjkvG" data-page-type="category" class="focus-section-link">
        <div class="image-container">
            <div class="image-hover"></div>
            <picture class="">
                   <img src="${en.hostImage+firstCategory.subcategories[i].category_img}" data-src="https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg" alt="" class=" lazyloaded" width="600" height="600">
            </picture>
        </div>
    </a>
    <div class="card-body">
        <a href="https://www.pixartprinting.com/printing-magazines-books-catalogues/magazines/" class="card-title focus-section-link" data-page-id="7iuNdt1YkCIIMrWz9vjkvG" data-page-type="category">
           ${firstCategory.subcategories[i].category_name}
        </a>
    </div>
</div>

</div>`;


}

for(let i=0;i<Math.min(secondCategory.subcategories.length,4);i++){


divSubcategoriesShowSecond.innerHTML+=`
<div class="col-6 col-lg-3">
                                   <div class="card-btn">
                                       <a href="https://www.pixartprinting.com/packaging/standard-packaging/" data-page-id="71GokkhMO38Vozl2jOL27e" data-page-type="category" class="focus-section-link">
                                           <div class="image-container">
                                               <div class="image-hover"></div>
                                               <picture class="">
                                               <img  src="${en.hostImage+secondCategory.subcategories[i].category_img}" data-src="https://images.ctfassets.net/cma41nsiygxr/65SoNiYbsoOvhfLEZrZQHh/cd7da95df91b73ff039917ed0a6ff434/pulsante_600.jpg" alt="" class=" ls-is-cached lazyloaded" width="600" height="600">
                                               </picture>
                                           </div>
                                       </a>
                                       <div class="card-body">
                                           <a href="https://www.pixartprinting.com/packaging/standard-packaging/" class="card-title focus-section-link" data-page-id="71GokkhMO38Vozl2jOL27e" data-page-type="category">
                                           ${secondCategory.subcategories[i].category_name}
                                           </a>
                                       </div>
                                   </div>

                               </div>`



}


{/* <div class="col-6 col-lg-2">
<div class="card-btn">
    <a href="https://www.pixartprinting.com/printing-magazines-books-catalogues/magazines/" data-page-id="7iuNdt1YkCIIMrWz9vjkvG" data-page-type="category" class="focus-section-link">
        <div class="image-container">
            <div class="image-hover"></div>
            <picture class="">
                <source data-srcset="https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg?fm=avif&amp;w=600" media="(min-width: 413px)" type="image/avif" srcset="https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg?fm=avif&amp;w=600">
                <source data-srcset="https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg?fm=webp&amp;w=600" media="(min-width: 413px)" type="image/webp" srcset="https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg?fm=webp&amp;w=600">
                <source data-srcset="https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg?fm=avif&amp;w=344 2x,
https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg?fm=avif&amp;w=172" media="(max-width: 412px)" type="image/avif" srcset="https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg?fm=avif&amp;w=344 2x,
https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg?fm=avif&amp;w=172">
                <source data-srcset="https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg?fm=webp&amp;w=344 2x,
https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg?fm=webp&amp;w=172" media="(max-width: 412px)" type="image/webp" srcset="https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg?fm=webp&amp;w=344 2x,
https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg?fm=webp&amp;w=172">
                <img src="./home-page_files/button_magazines.jpg" data-src="https://images.ctfassets.net/cma41nsiygxr/7aujVwhCZLdKG7Bg5GvnJQ/4933d38435582f0bec5bee8390cf1fa3/button_magazines.jpg" alt="" class=" lazyloaded" width="600" height="600">
            </picture>
        </div>
    </a>
    <div class="card-body">
        <a href="https://www.pixartprinting.com/printing-magazines-books-catalogues/magazines/" class="card-title focus-section-link" data-page-id="7iuNdt1YkCIIMrWz9vjkvG" data-page-type="category">
            Magazines
        </a>
    </div>
</div>

</div>
 */}


//     return fetch(host + 'category' + `/getCategoriesByParentId?id=${id==null?'':id}`, {
//         method: "GET",
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     })
//     .then(res => {return res.json();});
//   }

// let divHomeSliderCategories=document.getElementById("div-home-slider-categories");
//            if(divHomeSliderCategories!=null){
//             let categories=await getCategoriesByParentId(null);
//             // if(divHomeSliderCategories!=null){

//             //   // let categories=await getCategoriesByParentId(null);
//             //      for (let index = 0; index < categories.length; index++) {
//             //        divHomeSliderCategories.innerHTML+=`<div class="keen-slider__slide">
//             //        <div class="card-btn">
//             //          <a
//             //            href="lp/reviews-opinions/clkn/https/www.pixartprinting.com/printing-magazines-books-catalogues/index.html"
//             //            data-page-id="aYzhwaY4iiue56PX2F5dg"
//             //            data-page-type="category"
//             //            class="focus-section-link"
//             //          >
//             //            <div class="image-container">
//             //              <div class="image-hover"></div>
//             //              <picture class="">
                        
//             //                <img
//             //                  src="  ${hostImage+categories[index].category_img}"
//             //                  alt=" ${categories[index].category_name}"
//             //                  class="lazyload"
//             //                  width="600"
//             //                  height="600"
//             //                />
//             //              </picture>
//             //            </div>
//             //          </a>
//             //          <div class="card-body">
//             //            <a
//             //              href="lp/reviews-opinions/clkn/https/www.pixartprinting.com/printing-magazines-books-catalogues/index.html"
//             //              class="card-title focus-section-link"
//             //              data-page-id="aYzhwaY4iiue56PX2F5dg"
//             //              data-page-type="category"
//             //            >
//             //            ${categories[index].category_name}
//             //            </a>
//             //          </div>
//             //        </div>
//             //      </div>`
      
//             //      }
          
//             //   }
//               for (let index = 0; index < 8; index++) {
//                 divHomeSliderCategories.innerHTML+=`<div class="keen-slider__slide">
//                 <div class="card-btn">
//                   <a
//                     href="lp/reviews-opinions/clkn/https/www.pixartprinting.com/printing-magazines-books-catalogues/index.html"
//                     data-page-id="aYzhwaY4iiue56PX2F5dg"
//                     data-page-type="category"
//                     class="focus-section-link"
//                   >
//                     <div class="image-container">
//                       <div class="image-hover"></div>
//                       <picture class="">
                     
//                         <img
//                           src="images/placeholder_button.png"
//                           data-src="https://images.ctfassets.net/cma41nsiygxr/3yfA3mu7vL5FHyjlgPr8cG/08cca68684df034b6c78fdb8edf9a897/600_riviste.jpg"
//                           alt="Magazines, Books &amp; Catalogues"
//                           class="lazyload"
//                           width="600"
//                           height="600"
//                         />
//                       </picture>
//                     </div>
//                   </a>
//                   <div class="card-body">
//                     <a
//                       href="lp/reviews-opinions/clkn/https/www.pixartprinting.com/printing-magazines-books-catalogues/index.html"
//                       class="card-title focus-section-link"
//                       data-page-id="aYzhwaY4iiue56PX2F5dg"
//                       data-page-type="category"
//                     >
//                       Magazines, Books &amp; Catalogues
//                     </a>
//                   </div>
//                 </div>
//               </div>`
   
//               }
//             }