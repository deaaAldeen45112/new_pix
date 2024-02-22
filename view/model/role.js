export class Role {
    #roleId;
    #roleName;
    #users = [];

    constructor() {
        this.#roleId = 0;
        this.#roleName = null;
    }

    get roleId() {
        return this.#roleId;
    }

    set roleId(value) {
        this.#roleId = value;
    }

    get roleName() {
        return this.#roleName;
    }

    set roleName(value) {
        this.#roleName = value;
    }

    get users() {
        return this.#users;
    }
    toJSON() {
        const jsonObj = Object.assign({}, this);
        const proto = Object.getPrototypeOf(this);
        for (const key of Object.getOwnPropertyNames(proto)) {
            const desc = Object.getOwnPropertyDescriptor(proto, key);
            const hasGetter = desc && typeof desc.get === 'function';
            if (hasGetter) {
                jsonObj[key] = this[key];
            }
        }
        return jsonObj;
    }
}

// Example 
// Example usage:
const roleInstance = new Role();
roleInstance.roleId = 1;
roleInstance.roleName = "Admin";
roleInstance.users.push(new User());