import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.css'
})
export class LogoutButtonComponent {
  constructor(private authService: AuthService) {}
  onClickHandler() {
    this.authService.logoutUser()
    window.location.replace('/auth/login')
  }
}
