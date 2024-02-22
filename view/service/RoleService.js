import { GenericService } from './GenericService'; // Adjust the file path accordingly

// Now you can use GenericService in your file

export class RoleService extends GenericService {
    constructor() {
        super("Role");
    }
}