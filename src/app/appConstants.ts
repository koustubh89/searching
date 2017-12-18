import { HttpHeaders } from '@angular/common/http';
export enum Role {
    ADMIN = 1,
    USER = 2,
    UNAUTHORISED = 3
}
export enum RoleEmails {
    USER = <any>'user@swapi.com',
    ADMIN = <any>'admin@swapi.com'
}
export enum RoleAuthenicate {
    SUCCESS = 1,
    ERROR = 2
}
export class AppUrls {
    public baseUrl = 'https://swapi.co/api/';
}
export class AppConstants extends AppUrls {
    public httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    public getUsersURL = this.baseUrl + 'people';  // URL to web api
}
