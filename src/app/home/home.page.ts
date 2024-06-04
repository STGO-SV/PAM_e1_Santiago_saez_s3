import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userName: string = 'Usuario';  // Nombre de usuario extraído de los usuarios registrados

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    const users = this.userService.getUsers();
    if (users.length > 0) {
      this.userName = users[users.length - 1].firstName;  // Asumimos que el último usuario registrado es el usuario actual
    }
  }
}