
import { GenericService } from './GenericService.js'; // Adjust the file path accordingly
import * as en from "../common/env.js";

export class ReviewService extends GenericService {
    static entity="review";
   
    static plural="reviews";
    static pluralCaptial="Reviews";
    static entityCaptial="Review";

    static async getPaginatedReviewsByProductId(pageNumber,pageSize,id) {
        return fetch(en.host + this.entity + `/getPaginatedReviewsByProductId?page=${pageNumber}&pageSize=${pageSize}&productId=${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }


}