import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-converse-card',
    templateUrl: 'converse_card.component.html',
    styleUrls: ['./converse_card.component.css']
})
export class ConverseCardComponent{
    @Input()
    name!:string;
    @Input()
    product_type!:string;
    @Input()
    number_colors!:string;
    @Input()
    price!:string;
    @Input()
    imagePath!:string;
}