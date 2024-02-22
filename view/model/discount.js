export class Discount {
    product_id;
    discount_with_quantity_id;
    quantity;
    discount_rate;
  
     constructor() {
        this.product_id = null;
        this.discount_with_quantity_id = 0;
        this.discount_rate = null;
        this.quantity=null;
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
