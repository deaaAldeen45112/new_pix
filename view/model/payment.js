export class Payment {
    #paymentId;
    #name;
    #type;
    #number;
  

    constructor() {
        this.#paymentId = 0;
        this.#name = null;
        this.#type = null;
        this.#number = null;
     
    }
    get paymentId() {
        return this.#paymentId;
    }

    set paymentId(value) {
        this.#paymentId = value;
    }
    
    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get type() {
        return this.#type;
    }

    set type(value) {
        this.#type = value;
    }

    get number() {
        return this.#number;
    }

    set number(value) {
        this.#number = value;
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

