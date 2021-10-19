export class CardData {
    name: string;
    product_type: string;
    number_colors: string;
    price: string;
    imagePath: string;

    constructor({name, product_type,number_colors, price, imagePath } :
        {name:string, product_type:string, number_colors:string, price:string, imagePath:string}) {
            this.name = name;
            this.product_type = product_type;
            this.number_colors = number_colors;
            this.price = price;
            this.imagePath = imagePath;
        }
}