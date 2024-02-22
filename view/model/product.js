export class Product {
    product_id;
    product_name;
    quantity;
    product_img;
    price;
    product_summery;
    product_desc;
    category_id;
     constructor() {
        this.product_id = 0;
        this.product_name = null;
        this.price = 0;
        this.quantity = null;
        this.product_img = null;
        this.product_summery = null;
        this.product_desc = null;
        this.category_id = null;
    }

    // get productId() {
    //     return this.#productId;
    // }

    // set productId(value) {
    //     this.#productId = value;
    // }

    // get productName() {
    //     return this.#productName;
    // }

    // set productName(value) {
    //     this.#productName = value;
    // }

    // get quantity() {
    //     return this.#quantity;
    // }

    // set quantity(value) {
    //     this.#quantity = value;
    // }

    // get productImg() {
    //     return this.#productImg;
    // }

    // set productImg(value) {
    //     this.#productImg = value;
    // }

    // get price() {
    //     return this.#price;
    // }

    // set price(value) {
    //     this.#price = value;
    // }

    // get productSummery() {
    //     return this.#productSummery;
    // }

    // set productSummery(value) {
    //     this.#productSummery = value;
    // }

    // get productDesc() {
    //     return this.#productDesc;
    // }

    // set productDesc(value) {
    //     this.#productDesc = value;
    // }

    // get categoryId() {
    //     return this.#categoryId;
    // }

    // set categoryId(value) {
    //     this.#categoryId = value;
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
