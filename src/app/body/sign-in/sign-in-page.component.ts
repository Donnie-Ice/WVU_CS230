import { Component, OnInit } from "@angular/core";
import { SignInInfo } from "./sign-in-page.model";
import { SignInInfoService } from "./sign-in-page.service";

@Component({
    selector: 'sign-in',
    templateUrl: 'sign-in-page.component.html'
})
export class SignInComponent implements OnInit{
    LogInInfo: SignInInfo | undefined;

    constructor(private signInInfoService:SignInInfoService){

    }

    ngOnInit(): void {
        console.log('Showing sign in data');
        this.showSignInInfo();
    }

    
    showSignInInfo() {
        this.signInInfoService.getSignInInfo().subscribe((data: SignInInfo) => {
            console.log(data);
            this.LogInInfo = data;
        })
    }

    onEditSignInInfo(data:SignInInfo) {
        this.signInInfoService.editSignInInfo(data).subscribe(data => {
            console.log("Data Posted Successfully");
            console.log(data);
        });
    }

}