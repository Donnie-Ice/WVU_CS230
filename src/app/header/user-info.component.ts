import { Component, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";

@Component({
    selector: 'nike-user-info',
    templateUrl: 'user-info.component.html'
})
export class UserInfoComponent implements OnInit{
    myInfo: UserInfo | undefined;
    
    constructor(private infoService: UserInfoService){
    }

    ngOnInit(): void {
        console.log('Showing data');
        this.showUserInfo();
        this.infoService.editUserInfo().subscribe(data => {
            console.log(data);
        })
    }

    
    showUserInfo() {
        this.infoService.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}