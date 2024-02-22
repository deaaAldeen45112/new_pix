export class ProductProperty {
    product_property_id;
    product_property_name;
    product_property_desc;
    type_id;
    img_name;
    product_id;
  
     constructor() {
        this.product_property_id = 0;
        this.product_property_name = null;
        this.product_property_desc = null;
        this.type_id=null;
        this.img_name=null;
        this.product_id=null;
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
