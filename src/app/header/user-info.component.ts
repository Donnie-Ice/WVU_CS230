import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable()
@Component({
    selector: 'nike-user-info',
    templateUrl: 'user-info.component.html',
    styleUrls: []
})
export class UserInfoComponent implements OnInit{
    myInfo: UserInfo | undefined;
    
    constructor(private http:HttpClient){

    }

    ngOnInit(): void {
        console.log('Sending get request to server');
        this.getUserInfo();
        console.log('Showing data');
        this.showUserInfo();
    }

    getUserInfo() {
        return this.http.get<UserInfo>('https://nike-app-7911a-default-rtdb.firebaseio.com/my-info.json');
    }

    showUserInfo() {
        this.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}