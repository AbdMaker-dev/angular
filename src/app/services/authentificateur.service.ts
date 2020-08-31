import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthentificateurService {

  private decodedToken;

  constructor(private httpClient: HttpClient) { }

    login(username:string, password:string): Observable<any>{
      return this.httpClient.post('http://127.0.0.1:8000/api/login_check', {username, password}).pipe(tap(token =>{
      localStorage.clear();  
      return this.saveToken(token.token);
      }));
    }

    private saveToken(token: any): any{
      this.decodedToken = jwt.decodeToken(token);
      localStorage.setItem('auth_tkn', token);
      localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
      return token;
    }

// register(email:string, password:string) {
//   return this.httpClient.post<{access_token: string}>('http://www.your-server.com/auth/register', {email, password}).pipe(tap(res => {
//   this.login(email, password)
// }))
// }

      logout() {
      localStorage.clear();
      }

      public getToken(): string {
        return localStorage.getItem('auth_tkn');
      }

      public loggedIn(): boolean{
        return localStorage.getItem('auth_tkn') !==  null;
      }

      public getUser(): Observable<any> {           
              return this.httpClient.get('http://127.0.0.1:8000/api/user').pipe(tap(data =>{
              return data;
          }));
      }

      public updateApprenant(user:any): Observable<any>{           
        return this.httpClient.post('http://127.0.0.1:8000/api/user',user).pipe(tap(data =>{
        return data;
    }));
}

}
