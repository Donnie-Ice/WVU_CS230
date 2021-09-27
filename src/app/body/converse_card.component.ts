import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-converse-card',
    templateUrl: 'converse_card.component.html',
    styleUrls: []
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