import { GenericService } from './GenericService.js'; // Adjust the file path accordingly
import * as en from "../common/env.js";

export class InputPropService extends GenericService {
    static entity="inputProductProperty";
   
    static plural="inputProductProperties";
    static pluralCaptial="InputProductProperties";
    static entityCaptial="InputProductProperty";

    static getInputProductPropertiesByProductPropertyId(id) {
        return fetch(en.host + this.entity + `/getInputProductPropertiesByProductPropertyId?productPropertyId=${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }


}