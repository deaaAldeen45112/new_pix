						
export class OptionProperty {
    option_product_property_id;
    product_property_id;
    option_name;
    option_img;
    option_price;
    option_default;
  
     constructor() {
        this.option_product_property_id = 0;
        this.product_property_id = null;
        this.option_name = null;
        this.option_img=null;
        this.option_price=null;
        this.option_default=null;
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
