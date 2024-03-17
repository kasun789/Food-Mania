import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthService{
    constructor(private http: HttpClient){}
    private api_url = "http://localhost:3000/api";

    authentication(email: any,password: any): Observable<string> {
        return this.http.post<any>(`${this.api_url}/user/login`,{'email': email,'password': password});
    }
}