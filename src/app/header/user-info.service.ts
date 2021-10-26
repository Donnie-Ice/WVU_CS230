import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn: 'root'})
export class UserInfoService{
    url: string = 'https://nike-app-7911a-default-rtdb.firebaseio.com/my-info.json';
    constructor(private http:HttpClient) {
        
    }

    getUserInfo() {
        return this.http.get<UserInfo>(this.url);
    }

    editUserInfo() {
        var temp: UserInfo = {
            FirstName: "John",
            LastName: "Smith",
            GitHub: "http",
            mix_id: "jsmith",
        }

        return this.http.put(this.url, temp);
    }
}