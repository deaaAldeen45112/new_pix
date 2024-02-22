

import * as en from "../common/env.js";

export class GenericService {
    static entity="";
    static plural="";
    static entityCaptial="";
    static pluralCaptial="";
    constructor() {
       
    }
    
    static getPagenation( pageNumber,  pageSize) {
        return fetch(en.host + this.entity + `/getPaginated${this.pluralCaptial}?page=${pageNumber}&pageSize=${pageSize}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }
    static create(data) {
        return fetch(en.host + this.entity + `/create${this.entityCaptial}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    static uploadImages(requestOptions) {
        return fetch(en.host+this.entity+'/uploadImagesSlider', requestOptions)
         .then(response => {
             if (!response.ok) {
                 throw new Error('Network response was not ok');
             }
             return response.json();
         })
         .then(data => {
             // Handle the response from the server
             console.log('Images uploaded successfully:', data);
         })
         .catch(error => {
             // Handle errors during the fetch request
             console.error('Error uploading images:', error);
         });
     }
 

    static uploadImage(form) {
        return fetch(en.host + this.entity + `/uploadImage`, {
            method: "POST",
            body: form
        })
        .then(res => this.handleResponse(res));
    }

    static update(data) {
        return fetch(en.host + this.entity + `/update${this.entityCaptial}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    static read() {
        return fetch(en.host + this.entity + `/get${this.pluralCaptial}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    static readById(id) {
        return fetch(en.host + this.entity + `/get${this.entityCaptial}ById`+`/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    static delete(id) {
        return fetch(en.host + this.entity + `/delete${this.entityCaptial}ById/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    static handleResponse(res) {
        if (res.status >= 200 && res.status < 300) {
            return res.json();
        } else {
            throw new Error();
        }
    }
}
