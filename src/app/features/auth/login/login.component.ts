import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password

    const observable = this.authService.loginUser(email, password)

    if(observable) {
      observable.subscribe({
        next: (response: any) => {
          localStorage.setItem('jwt', response.data.token)
          window.location.pathname = ''
        },
        error: (err) => {
          console.error('Login failed', err)
        }
      })
    } 
  }
}
