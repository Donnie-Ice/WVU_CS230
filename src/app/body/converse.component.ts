import { Component } from "@angular/core";
import { CardData } from "./converse_card.model";
import { CardDataService } from "./converse_card.service";

@Component({
    selector: 'app-converse',
    templateUrl: 'converse.component.html',
    styleUrls: ['./converse_card.component.css']
})
export class ConverseComponent{
    Item:CardData[] = [];

    constructor(private cardDataService: CardDataService) {
        this.cardDataService.getCardData().subscribe((data: CardData[]) =>{
            console.log(data)
            for(let i = 0; i < data.length; i++){
                var card:(CardData | undefined) = this.Item[i]
                this.Item.push(new CardData(card))
            }
        })
    }
}