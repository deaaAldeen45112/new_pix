

import { GenericService } from './GenericService.js'; // Adjust the file path accordingly
import * as en from "../common/env.js";

export class ProductService extends GenericService {
    static entity="product";
   
    static plural="products";
    static pluralCaptial="Products";
    static entityCaptial="Product";
    

    static getProductByCategoryId(id) {
        return fetch(en.host + this.entity + `/getProductByCategoryId`+`/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }
    static getProductWithParentIdById(id) {
        return fetch(en.host + this.entity + `/getProductWithParentIdById`+`/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }
    static getPaginatedProductsWithCategory( pageNumber,  pageSize) {
        return fetch(en.host + this.entity + `/getPaginatedProductsWithCategory?page=${pageNumber}&pageSize=${pageSize}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }


    static getProductImgsSliderByProductId(id) {
        return fetch(en.host + this.entity + `/getProductImgsSliderByProductId/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    static deleteProductImgSlider(id) {
        return fetch(en.host + this.entity + `/deleteProductImgSlider/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }





}