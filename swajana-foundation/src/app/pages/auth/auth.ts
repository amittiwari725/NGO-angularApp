import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  template: `
    <div class="auth-container">
      <div class="auth-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
          <div class="shape shape-5"></div>
        </div>
      </div>
      
      <div class="auth-card" [@slideInUp]>
        <div class="auth-header">
          <h1 class="auth-title" [@fadeIn]>
            <i class="fas fa-hands-helping"></i>
            Welcome to SWAJANA
          </h1>
          <p class="auth-subtitle" [@fadeIn]>Join our mission to transform lives through education</p>
        </div>

        <mat-tab-group class="auth-tabs" (selectedTabChange)="onTabChange($event)" 
                       [@tabAnimation] 
                       [animationDuration]="300">
          <mat-tab label="Register">
            <div class="tab-content" [@formSlide]>
              <form [formGroup]="registerForm" (ngSubmit)="onRegister()" class="auth-form">
                <div class="form-row">
                  <mat-form-field appearance="outline" class="form-field">
                    <mat-label>First Name</mat-label>
                    <input matInput formControlName="firstName" placeholder="Enter your first name">
                    <mat-icon matPrefix>person</mat-icon>
                    <mat-error *ngIf="registerForm.get('firstName')?.invalid && registerForm.get('firstName')?.touched">
                      First name is required
                    </mat-error>
                  </mat-form-field>

                  <mat-form-field appearance="outline" class="form-field">
                    <mat-label>Last Name</mat-label>
                    <input matInput formControlName="lastName" placeholder="Enter your last name">
                    <mat-icon matPrefix>person</mat-icon>
                    <mat-error *ngIf="registerForm.get('lastName')?.invalid && registerForm.get('lastName')?.touched">
                      Last name is required
                    </mat-error>
                  </mat-form-field>
                </div>

                <mat-form-field appearance="outline" class="form-field full-width">
                  <mat-label>Email Address</mat-label>
                  <input matInput type="email" formControlName="email" placeholder="Enter your email">
                  <mat-icon matPrefix>email</mat-icon>
                  <mat-error *ngIf="registerForm.get('email')?.invalid && registerForm.get('email')?.touched">
                    <span *ngIf="registerForm.get('email')?.errors?.['required']">Email is required</span>
                    <span *ngIf="registerForm.get('email')?.errors?.['email']">Please enter a valid email</span>
                  </mat-error>
                </mat-form-field>

                <mat-form-field appearance="outline" class="form-field full-width">
                  <mat-label>Password</mat-label>
                  <input matInput [type]="hidePassword() ? 'password' : 'text'" formControlName="password" placeholder="Create a password">
                  <mat-icon matPrefix>lock</mat-icon>
                  <button mat-icon-button matSuffix (click)="hidePassword.set(!hidePassword())" type="button">
                    <mat-icon>{{hidePassword() ? 'visibility_off' : 'visibility'}}</mat-icon>
                  </button>
                  <mat-error *ngIf="registerForm.get('password')?.invalid && registerForm.get('password')?.touched">
                    Password must be at least 8 characters long
                  </mat-error>
                </mat-form-field>

                <mat-form-field appearance="outline" class="form-field full-width">
                  <mat-label>Confirm Password</mat-label>
                  <input matInput [type]="hideConfirmPassword() ? 'password' : 'text'" formControlName="confirmPassword" placeholder="Confirm your password">
                  <mat-icon matPrefix>lock</mat-icon>
                  <button mat-icon-button matSuffix (click)="hideConfirmPassword.set(!hideConfirmPassword())" type="button">
                    <mat-icon>{{hideConfirmPassword() ? 'visibility_off' : 'visibility'}}</mat-icon>
                  </button>
                  <mat-error *ngIf="registerForm.get('confirmPassword')?.invalid && registerForm.get('confirmPassword')?.touched">
                    <span *ngIf="registerForm.get('confirmPassword')?.errors?.['required']">Please confirm your password</span>
                    <span *ngIf="registerForm.get('confirmPassword')?.errors?.['mismatch']">Passwords don't match</span>
                  </mat-error>
                </mat-form-field>

                <div class="checkbox-container">
                  <mat-checkbox formControlName="agreeToTerms" class="terms-checkbox">
                    I agree to the <a href="#" class="terms-link">Terms of Service</a> and <a href="#" class="terms-link">Privacy Policy</a>
                  </mat-checkbox>
                </div>

                <button mat-raised-button type="submit" class="auth-button register-button" 
                        [disabled]="registerForm.invalid" [@buttonPulse]>
                  <mat-icon>person_add</mat-icon>
                  Create Account
                </button>

                <div class="social-register">
                  <p class="social-text">Or register with</p>
                  <div class="social-buttons">
                    <button mat-raised-button class="social-btn google-btn" type="button" [@buttonHover]>
                      <i class="fab fa-google"></i>
                      Google
                    </button>
                    <button mat-raised-button class="social-btn facebook-btn" type="button" [@buttonHover]>
                      <i class="fab fa-facebook-f"></i>
                      Facebook
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </mat-tab>

          <mat-tab label="Login">
            <div class="tab-content" [@formSlide]>
              <form [formGroup]="loginForm" (ngSubmit)="onLogin()" class="auth-form">
                <mat-form-field appearance="outline" class="form-field full-width">
                  <mat-label>Email Address</mat-label>
                  <input matInput type="email" formControlName="email" placeholder="Enter your email">
                  <mat-icon matPrefix>email</mat-icon>
                  <mat-error *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">
                    <span *ngIf="loginForm.get('email')?.errors?.['required']">Email is required</span>
                    <span *ngIf="loginForm.get('email')?.errors?.['email']">Please enter a valid email</span>
                  </mat-error>
                </mat-form-field>

                <mat-form-field appearance="outline" class="form-field full-width">
                  <mat-label>Password</mat-label>
                  <input matInput [type]="hideLoginPassword() ? 'password' : 'text'" formControlName="password" placeholder="Enter your password">
                  <mat-icon matPrefix>lock</mat-icon>
                  <button mat-icon-button matSuffix (click)="hideLoginPassword.set(!hideLoginPassword())" type="button">
                    <mat-icon>{{hideLoginPassword() ? 'visibility_off' : 'visibility'}}</mat-icon>
                  </button>
                  <mat-error *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
                    Password is required
                  </mat-error>
                </mat-form-field>

                <div class="login-options">
                  <mat-checkbox formControlName="rememberMe" class="remember-checkbox">
                    Remember me
                  </mat-checkbox>
                  <a href="#" class="forgot-password">Forgot password?</a>
                </div>

                <button mat-raised-button type="submit" class="auth-button login-button" 
                        [disabled]="loginForm.invalid" [@buttonPulse]>
                  <mat-icon>login</mat-icon>
                  Sign In
                </button>

                <div class="social-register">
                  <p class="social-text">Or sign in with</p>
                  <div class="social-buttons">
                    <button mat-raised-button class="social-btn google-btn" type="button" [@buttonHover]>
                      <i class="fab fa-google"></i>
                      Google
                    </button>
                    <button mat-raised-button class="social-btn facebook-btn" type="button" [@buttonHover]>
                      <i class="fab fa-facebook-f"></i>
                      Facebook
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </mat-tab>
        </mat-tab-group>
      </div>
    </div>
  `,
  styleUrls: ['./auth.scss'],
  animations: [
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('600ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms 200ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('formSlide', [
      transition(':enter', [
        style({ transform: 'translateX(-20px)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('buttonPulse', [
      state('default', style({ transform: 'scale(1)' })),
      state('pressed', style({ transform: 'scale(0.98)' })),
      transition('* => pressed', animate('100ms ease-in')),
      transition('pressed => *', animate('100ms ease-out'))
    ]),
    trigger('buttonHover', [
      transition(':enter', [
        style({ transform: 'scale(1)' }),
        animate('200ms ease-out', style({ transform: 'scale(1.02)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ transform: 'scale(1)' }))
      ])
    ]),
    trigger('tabAnimation', [
      transition('* => *', [
        style({ opacity: 0.8 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AuthComponent {
  registerForm: FormGroup;
  loginForm: FormGroup;
  hidePassword = signal(true);
  hideConfirmPassword = signal(true);
  hideLoginPassword = signal(true);
  currentTab = signal(0);

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      agreeToTerms: [false, [Validators.requiredTrue]]
    }, { validators: this.passwordMatchValidator });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
      return { mismatch: true };
    }
    
    if (confirmPassword?.errors?.['mismatch']) {
      delete confirmPassword.errors['mismatch'];
      if (Object.keys(confirmPassword.errors).length === 0) {
        confirmPassword.setErrors(null);
      }
    }
    
    return null;
  }

  onTabChange(event: any) {
    this.currentTab.set(event.index);
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('Registration data:', this.registerForm.value);
      // Implement registration logic here
      alert('Registration successful! Welcome to SWAJANA Foundation!');
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login data:', this.loginForm.value);
      // Implement login logic here
      alert('Login successful! Welcome back!');
    }
  }
}