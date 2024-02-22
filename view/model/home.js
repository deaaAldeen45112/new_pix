export class Home {
    #homeId;
    #homeImage;
    #websiteLogo;
    #aboutDescription;
    #email;
    #phone;

    constructor() {
        this.#homeId = 0;
        this.#homeImage = null;
        this.#websiteLogo = null;
        this.#aboutDescription = null;
        this.#email = null;
        this.#phone = null;
    }

    get homeId() {
        return this.#homeId;
    }

    set homeId(value) {
        this.#homeId = value;
    }

    get homeImage() {
        return this.#homeImage;
    }

    set homeImage(value) {
        this.#homeImage = value;
    }

    get websiteLogo() {
        return this.#websiteLogo;
    }

    set websiteLogo(value) {
        this.#websiteLogo = value;
    }

    get aboutDescription() {
        return this.#aboutDescription;
    }

    set aboutDescription(value) {
        this.#aboutDescription = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get phone() {
        return this.#phone;
    }

    set phone(value) {
        this.#phone = value;
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

// Example usage:
const homeInstance = new Home();
homeInstance.homeId = 1;
homeInstance.homeImage = "path/to/home-image.jpg";
homeInstance.websiteLogo = "path/to/logo.png";
homeInstance.aboutDescription = "Welcome to our website!";
homeInstance.email = "contact@example.com";
homeInstance.phone = "123-456-7890";
