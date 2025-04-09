import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = ''; 
  password: string = '';
  constructor(private authService: AuthService, private router: Router) { }
  onSubmit() {
    
    const user = { username: this.username, password: this.password };

    this.authService.login(user).subscribe({
      next: (response) => {
       
        localStorage.setItem('auth_token', response.token); 
        this.router.navigate(['/']); 
        alert('worked'+ response.token );
      },
      error: (err) => {
        console.error('Login error', err);
        alert('Login failed');
      }
    });
  }
}
