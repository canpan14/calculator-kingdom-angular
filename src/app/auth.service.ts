import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  user: any

	baseUrl = 'http://localhost:4741';

  getUserToken() {
    return this.user.token
  }

	signIn(credentials) {
		return this.http.post(`${this.baseUrl}/sign-in`, {credentials: credentials });
	}

	signUp(credentials) {
		return this.http.post(`${this.baseUrl}/sign-up`, {credentials: credentials });
	}

	signOut() {
    const config = {}
    config['headers'] = { Authorization:'Token token=' + this.user.token }
		return this.http.delete(`${this.baseUrl}/sign-out/${this.user.id}`, config);
	}

	changePassword(credentials) {
    const config = {}
    config['headers'] = { Authorization:'Token token=' + this.user.token }
		return this.http.patch(`${this.baseUrl}/change-password/${this.user.id}`, {passwords: credentials });
	}

  constructor(private http: Http) { }

}
