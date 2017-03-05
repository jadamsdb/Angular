import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    
    constructor(private _LoginService: LoginService) { 
        
    }

    ngOnInit() {
        // reset login status

        // 
    }

    public login(): void{
        
        this.loading = true;
        this._LoginService.login(this.model.username, this.model.password)
            .subscribe(response =>
                {
                    if(response.status == 302)
                        this.loading = false;
                });
    }

}
