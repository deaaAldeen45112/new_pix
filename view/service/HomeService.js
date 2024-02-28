import { GenericService } from './GenericService.js'; // Adjust the file path accordingly

import * as en from "../common/env.js";

// Now you can use GenericService in your file

export class HomeService extends GenericService {


    static entity="home";
    static plural="ome";
    static pluralCaptial="home";
    static entityCaptial="Home";
  
    static getImgsSlidersByType(id) {
        return fetch(en.host + this.entity + `/getImgsSlidersByType/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

   
  

    static deleteImgSliders(id) {
        return fetch(en.host + this.entity + `/deleteImgSliders/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }




   
}