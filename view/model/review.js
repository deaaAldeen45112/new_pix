export class Review {
    review_id;
    user_id;
    product_id;
    review_desc;
    review_star;
  
     constructor() {
        this.review_id = 0;
        this.user_id = null;
        this.product_id = null;
        this.review_desc=null;
        this.review_star=null;
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
