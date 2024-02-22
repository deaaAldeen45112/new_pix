
import { GenericService } from './GenericService.js'; // Adjust the file path accordingly
import * as en from "../common/env.js";

export class PropertyService extends GenericService {
    static entity="productProperty";
   
    static plural="productProperties";
    static pluralCaptial="ProductProperties";
    static entityCaptial="ProductProperty";

    static getProductPropertiesByProductId(id) {
        return fetch(en.host + this.entity + `/getProductPropertiesByProductId?productId=${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }


}