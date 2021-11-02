import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { SignInInfo } from "../sign-in/sign-in-page.model";

@Injectable({ providedIn: 'root' })
export class DatabaseService {
    items: Observable<SignInInfo []>
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<SignInInfo>('SignInInfo').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: SignInInfo []) => {
            console.log("Data recieved");
            //for(let item of data) {
            //    console.log(item);
            //}
        })
    }
}