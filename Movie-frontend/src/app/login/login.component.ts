import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; 
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private movieService: MovieService) { }

  onSubmit() {
    const user = { username: this.username, password: this.password };

    this.authService.login(user).subscribe({
      next: (response: any) => {  
        localStorage.setItem('auth_token', 'Bearer ' + response.token);        localStorage.setItem('user_role', response.role);
        localStorage.setItem('username', this.username);
        console.log(response.token);

        if (response.role === 'ADMIN') {
          this.router.navigate(['/admin-dash']);
        } else {
          this.router.navigate(['/user-dash']);
        }
      },
      error: (err) => {
        console.error('Login error', err);
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    });
  }

  private getHeaders(): HttpHeaders {
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
    console.log('Auth token from storage:', token);
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    
    if (token) {
      if (token.startsWith('Bearer ')) {
        headers = headers.set('Authorization', token);
      } else {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }
    
    return headers;
  }
}
