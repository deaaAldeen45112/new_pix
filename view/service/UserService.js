import { GenericService } from './GenericService.js'; // Adjust the file path accordingly
import * as en from "../common/env.js";
// Now you can use CrudService in your file

export class UserService extends GenericService {
    static entity="user";
    static plural="users";
    static pluralCaptial="Users";
    static entityCaptial="User";
    constructor() {
       
    }
    static getPaginatedUsersWithRoleName( pageNumber,  pageSize) {
        return fetch(en.host + this.entity + `/getPaginatedUsersWithRoleName?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    static getUserByEmail(email) {
        return fetch(en.host + this.entity + `/GetUserByEmail?email=${email}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }
    static register(data) {
        return fetch(en.host + this.entity + `/Register`, {
            method: "POST",
            body:   data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }
    static login(data) {
        return fetch(en.host + this.entity + `/Login`, {
            method: "POST",
            body:   data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }
    
}