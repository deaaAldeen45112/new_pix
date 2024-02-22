import { GenericService } from './GenericService.js'; // Adjust the file path accordingly
import * as en from "../common/env.js";
// Now you can use GenericService in your file

export class PaymentService extends GenericService {
    static entity="PaymentInformation";
    static plural="PaymentInformations";
}