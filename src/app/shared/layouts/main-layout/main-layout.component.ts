import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LogoutButtonComponent } from '../../../features/auth/logout-button/logout-button.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, LogoutButtonComponent, RouterLink, RouterLinkActive],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
