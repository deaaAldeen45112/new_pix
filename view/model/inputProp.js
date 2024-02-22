export class InputProp {
    input_product_property_id;
    property_id;
    price;
    for_num;
  
     constructor() {
        this.input_product_property_id = 0;
        this.property_id = null;
        this.price = null;
        this.for_num=null;
       
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
