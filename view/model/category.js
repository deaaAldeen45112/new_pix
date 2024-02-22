export class Category {
    category_id;
    category_name;
    category_desc;
    category_img;
    parent_id;
    // #inverseParentNameNavigation = [];
    // #parentNameNavigation;
    // #planCategories = [];
    // #questions = [];

    constructor() {
        this.category_id = 0;
        this.category_name = null;
        this.category_desc = null;
        this.category_img = null;
        this.parent_id = null;
    }

    // get categoryId() {
    //     return this.#category_id;
    // }

    // set categoryId(value) {
    //     this.#category_id = value;
    // }

    // get categoryName() {
    //     return this.#category_name;
    // }

    // set categoryName(value) {
    //     this.#category_name = value;
    // }

    // get categoryDes() {
    //     return this.#category_des;
    // }

    // set categoryDes(value) {
    //     this.#category_des = value;
    // }

    // get categoryImg() {
    //     return this.#category_img;
    // }

    // get parentId() {
    //     return this.#parent_id;
    // }
    // set parentId(value) {
    //     this.#parent_id = value;
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
// const categoryInstance = new Category();
// categoryInstance.categoryId = 1;
// categoryInstance.categoryName = "Geography";
// categoryInstance.parentName = null; // Set the parent category if applicable
// categoryInstance.parentNameNavigation = new Category(); // Set the parent category if applicable
// categoryInstance.planCategories.push(new PlanCategory());
// categoryInstance.questions.push(new Question());
