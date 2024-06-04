import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      address: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8),
        Validators.pattern('^(?=.*[A-Z])(?=.*\\d).+$')  // Al menos una mayúscula y un número
      ]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      address: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8),
        Validators.pattern('^(?=.*[A-Z])(?=.*\\d).+$')  // Al menos una mayúscula y un número
      ]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    }); 
  }

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value 
      ? null : { 'mismatch': true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      const isAdded = this.userService.addUser(user);

      if (isAdded) {
        this.errorMessage = '';
        this.router.navigate(['/login']);
      } else {
        this.errorMessage = 'El usuario ya existe.';
      }
    } else {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
    }
  }
}