export default class Product {
    title: string;
    imageUrl: string;
    id: number;
    price: number;
    categoryId: number

    constructor(title: string, imageUrl: string, id: number, price: number, categoryId: number) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.id = id;
        this.price = price;
        this.categoryId = categoryId;
    }

}