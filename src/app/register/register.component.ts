import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  activeTab: 'login' | 'register' = 'login';
  loginForm: FormGroup;
  registerForm: FormGroup;
  loginMessage: { text: string; type: 'success' | 'error' } | null = null;
  registerMessage: { text: string; type: 'success' | 'error' } | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  switchTab(tab: 'login' | 'register'): void {
    this.activeTab = tab;
    this.loginMessage = null;
    this.registerMessage = null;
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      // TODO: Implement actual login logic here
      console.log('Login attempt:', { email, password });
      
      this.loginMessage = {
        text: 'Login successful!',
        type: 'success'
      };
    } else {
      this.loginMessage = {
        text: 'Please fill in all fields correctly.',
        type: 'error'
      };
    }
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const { name, email, password, confirmPassword } = this.registerForm.value;
      
      if (password !== confirmPassword) {
        this.registerMessage = {
          text: 'Passwords do not match!',
          type: 'error'
        };
        return;
      }

      // TODO: Implement actual registration logic here
      console.log('Register attempt:', { name, email, password });
      
      this.registerMessage = {
        text: 'Registration successful!',
        type: 'success'
      };
    } else {
      this.registerMessage = {
        text: 'Please fill in all fields correctly.',
        type: 'error'
      };
    }
  }

  passwordsMatch(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return password === confirmPassword;
  }

}
