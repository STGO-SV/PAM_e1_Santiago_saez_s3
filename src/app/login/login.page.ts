import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private userService: UserService,
    private animationCtrl: AnimationController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8),
        Validators.pattern('^(?=.*[A-Z])(?=.*\\d).+$')  // Al menos una mayúscula y un número
      ]]
    });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8),
        Validators.pattern('^(?=.*[A-Z])(?=.*\\d).+$')  // Al menos una mayúscula y un número
      ]]
    });
  }

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    const user = this.userService.getUserByEmail(email);
    
    if (user) {
      if (user.password === password) {
        // Redirigir al usuario a la página de inicio después de un inicio de sesión exitoso
        this.errorMessage = '';
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Contraseña incorrecta.';
        this.showErrorAnimation();
      }
    } else {
      this.errorMessage = 'No existe el usuario ingresado.';
      this.showErrorAnimation();
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);  // Vamos a la página de registro (crear cuenta)
  }

  showErrorAnimation() {
    const errorElement = document.querySelector('.error-message');
    if (errorElement) {
      const animation = this.animationCtrl.create()
        .addElement(errorElement)
        .duration(1000)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'translateX(0px)', opacity: '1' },
          { offset: 0.25, transform: 'translateX(-10px)', opacity: '0.8' },
          { offset: 0.5, transform: 'translateX(10px)', opacity: '0.6' },
          { offset: 0.75, transform: 'translateX(-10px)', opacity: '0.8' },
          { offset: 1, transform: 'translateX(0px)', opacity: '1' }
        ]);

      animation.play();
    }
  }
}