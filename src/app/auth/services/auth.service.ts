import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { map, Subject } from 'rxjs';

interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email: string, password: string, ) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCbbihDhAXOH61XDe1n2kMhF_CuE26ZcHY',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
  }

}
