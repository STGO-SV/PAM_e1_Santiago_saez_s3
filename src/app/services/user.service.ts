import { Injectable } from '@angular/core';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() { }

  addUser(user: User): boolean {
    const existingUser = this.users.find(u => u.email === user.email);
    if (existingUser) {
      return false;  // Usuario ya existe
    }
    this.users.push(user);
    return true;  // Usuario añadido con éxito
  }

  getUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  getUsers(): User[] {
    return this.users;
  }
}