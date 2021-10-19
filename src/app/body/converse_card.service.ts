import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardData } from "./converse_card.model";

@Injectable({providedIn: 'root'})
export class CardDataService{
    url: string = 'https://nike-app-7911a-default-rtdb.firebaseio.com/Converse-card-data.json';
    constructor(private http:HttpClient) {
        
    }

    getCardData() {
        return this.http.get<CardData[]>(this.url);
    }

}