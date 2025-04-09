import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string='';
  password: string ='';
  constructor(private authService: AuthService, private router: Router) { }
  onSubmit() {
    const user = { username: this.username, password: this.password };

    this.authService.register(user).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']); 
      },
      error: (err) => {
        console.error('Registration error', err);
        alert('Registration failed');
      }
    });
  }
}
