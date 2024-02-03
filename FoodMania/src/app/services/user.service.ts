import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailsVM } from '../shared/models/user.details.vm';

@Injectable()
export class userService {
  private url = 'http://localhost:3000';

  registerUser(user: UserDetailsVM): Observable<any> {
    console.log(user);
    
    return this.http.post(`${this.url}/api/user/register`, user);
  }

  constructor(private http: HttpClient) {}
}
