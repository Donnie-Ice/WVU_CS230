import { Component } from "@angular/core";
import { converse } from "./converse_card.model";
import { mock_converse } from "./mock_converse";

@Component({
    selector: 'app-converse',
    templateUrl: 'converse.component.html',
    styleUrls: ['./converse_card.component.css']
})
export class ConverseComponent{
    Item:converse[] = [];

    constructor() {
        for (var converse_card of mock_converse) {
            this.Item.push(new converse(converse_card))
        }
    }
}