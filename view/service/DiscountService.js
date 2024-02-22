
import { GenericService } from './GenericService.js'; // Adjust the file path accordingly
import * as en from "../common/env.js";

export class DiscountService extends GenericService {
    static entity="discountWithQuantity";
   
    static plural="reviews";
    static pluralCaptial="Reviews";
    static entityCaptial="DiscountWithQuantity";

    static getDiscountWithQuantityByProductId(id) {
        return fetch(en.host + this.entity + `/getDiscountWithQuantityByProductId?productId=${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }


}