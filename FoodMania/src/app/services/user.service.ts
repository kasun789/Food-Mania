import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailsVM } from '../shared/models/user.details.vm';

@Injectable()
export class userService {
  private url = 'http://localhost:3000/api';

  registerUser(user: UserDetailsVM): Observable<any> {
    return this.http.post(`${this.url}/user/register
    `, user);
  }

  constructor(private http: HttpClient) {}
}
