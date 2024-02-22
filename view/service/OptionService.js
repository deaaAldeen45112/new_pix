
import { GenericService } from './GenericService.js'; // Adjust the file path accordingly
import * as en from "../common/env.js";

export class OptionService extends GenericService {
    static entity="optionProductProperty";
   
    static plural="optionProductProperties";
    static pluralCaptial="OptionProductProperties";
    static entityCaptial="OptionProductProperty";

    static getOptionProductPropertiesByProductPropertyId(id) {
        return fetch(en.host + this.entity + `/getOptionProductPropertiesByProductPropertyId?productPropertyId=${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }


}