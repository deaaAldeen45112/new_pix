export class User {
    user_id;
    name;
    email;
    password;
    phone;
    role_id;
    country;
    constructor() {
        this.user_id = 0;
        this.name = null;
        this.email = null;
        this.password = null;
        this.phone = null;
        this.role_id = null;
        this.country=null;
      
    }

    // get userId() {
    //     return this.#userId;
    // }

    // set userId(value) {
    //     this.#userId = value;
    // }

    // get name() {
    //     return this.#name;
    // }

    // set name(value) {
    //     this.#name = value;
    // }

    // get email() {
    //     return this.#email;
    // }

    // set email(value) {
    //     this.#email = value;
    // }

    // get password() {
    //     return this.#password;
    // }

    // set password(value) {
    //     this.#password = value;
    // }

    // get phone() {
    //     return this.#phone;
    // }

    // set phone(value) {
    //     this.#phone = value;
    // }

    // get roleId() {
    //     return this.#roleId;
    // }

    // set roleId(value) {
    //     this.#roleId = value;
    // }

    // get quizzes() {
    //     return this.#quizzes;
    // }

    // get role() {
    //     return this.#role;
    // }

    // set role(value) {
    //     this.#role = value;
    // }

    // get testimonials() {
    //     return this.#testimonials;
    // }

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

// // Example usage:
// const userInstance = new User();
// userInstance.userId = 1;
// userInstance.name = "John Doe";
// userInstance.email = "john@example.com";
// userInstance.password = "password123";
// userInstance.phone = "123-456-7890";
// userInstance.roleId = 2;
// userInstance.role = new Role();
// userInstance.quizzes.push(new Quiz());
// userInstance.testimonials.push(new Testimonial());
