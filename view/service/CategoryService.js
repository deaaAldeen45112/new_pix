import { GenericService } from './GenericService.js'; // Adjust the file path accordingly

import * as en from "../common/env.js";
// Now you can use GenericService in your file

export class CategoryService extends GenericService {
    static entity="category";
    static plural="categories";
    static pluralCaptial="Categories";
    static entityCaptial="Category";
    constructor() {
       
    }
    


    static getCategoryWithSubcategoriesByParentId(id) {
        return fetch(en.host + this.entity + `/getCategoryWithSubcategoriesByParentId/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }
    static getCategoriesByParentId(id) {
        return fetch(en.host + this.entity + `/getCategoriesByParentId?id=${id==null?'':id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }
    static getAllCategoriesWithSubcategoriesAndProducts() {
        return fetch(en.host + this.entity + `/getAllCategoriesWithSubcategoriesAndProducts`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }
    static getAllCategoriesWithProductsByParentId(id) {
        return fetch(en.host + this.entity + `/getAllCategoriesWithProductsByParentId/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }
    static getCategoryImgsSliderByCategoryId(id) {
        return fetch(en.host + this.entity + `/getCategoryImgsSliderByCategoryId/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    static deleteCategoryImgSlider(id) {
        return fetch(en.host + this.entity + `/deleteCategoryImgSlider/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    static getRandomCategoryWithSubcategories(id) {
        return fetch(en.host + this.entity + `/getRandomCategoryWithSubcategories/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }
    

}