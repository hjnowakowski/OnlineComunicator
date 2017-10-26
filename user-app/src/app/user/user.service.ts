import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {User} from "./user";

@Injectable()
export class UserService {

  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: Http) { }

  findAll(): Observable<User[]> {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(Id: number): Observable<User>{
    return null;
  }

  saveUser(user: User): Observable<User>{
    return null;
  }

  deleteUserById(id: number): Observable<boolean>{
    return null;
  }

  updateuSER(user: User): Observable<User>{
    return null;
  }
}
