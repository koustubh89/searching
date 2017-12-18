import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable()
export class DbDataService {

  constructor() { }

  createDb() {
    const userData = [
      { id: 1, email: 'admin@nagarro.com', password: 'admin', role: "ADMIN" },
      { id: 2, email: 'user@nagarro.com', password: 'user', role: "USER" },
    ];
    return { userData };
  }
}
