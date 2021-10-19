import { Component, Input, OnInit } from "@angular/core";
import { CardData } from "./converse_card.model";
import { CardDataService } from "./converse_card.service";

@Component({
    selector: 'app-converse-card',
    templateUrl: 'converse_card.component.html',
    styleUrls: ['./converse_card.component.css']
})
export class ConverseCardComponent implements OnInit {
    @Input()
    name!: string;
    @Input()
    product_type!: string;
    @Input()
    number_colors!: string;
    @Input()
    price!: string;
    @Input()
    imagePath!: string;

    myData: CardData[] | undefined;

    constructor(private dataService: CardDataService) {
    }

    ngOnInit(): void {
        console.log('Showing card data');
        this.showCardData();
    }


    showCardData() {
        this.dataService.getCardData().subscribe((data: CardData[]) => {
            console.log(data);
            this.myData = data;
        })
    }
}