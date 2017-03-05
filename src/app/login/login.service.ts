import { Injectable } from '@angular/core';
// import { environment } from 'environments/environment';
import { Http, Response, Headers, RequestOptions, CookieXSRFStrategy } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
    // connectionLogin: string = environment.connectionString + '/eCMS/login.asp';
    connectionLogin: string = '/eCMS/login.asp';

    constructor(private _http: Http) { }

    public login(username: string, password: string): Observable<Response>{
        var cookies: any;


        var headers = new Headers();
        headers.append

        var resp: Observable<Response> = this._http.get(this.connectionLogin)
                        .map((response: Response) => {
                            console.log(response);
                            cookies = response.headers.getAll('set-cookie');
                        })
                        .catch(this.handleError);
        // var resp: Observable<Response> = this._http.get(this.connectionLogin + "?action=Login&page=&login=" + username + "&password=" + password)
        //                 .map((response: Response) => {
        //                     console.log(response);
        //                     cookies = response.headers.getAll('set-cookie');
        //                 })
        //                 .catch(this.handleError);
        
        return null ;
        // return this._http.post(this.connectionLogin + "?action=Login&page=&login=" + username + "&password=" + password,null)
        //         // .map((response: Response) => {
        //         //     if(response.status == 200)
        //         //         return true;
        //         //     else
        //         //         return false;
        //         // })
        //         .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
