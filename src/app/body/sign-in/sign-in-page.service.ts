import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SignInInfo } from "./sign-in-page.model";

@Injectable({providedIn: 'root'})
export class SignInInfoService{
    url: string = 'https://nike-app-7911a-default-rtdb.firebaseio.com/SignInInfo.json';
    constructor(private http:HttpClient) {
        
    }

    getSignInInfo() {
        return this.http.get<SignInInfo>(this.url);
    }

    editSignInInfo(data: SignInInfo) {
        return this.http.put(this.url, data);
    }
}