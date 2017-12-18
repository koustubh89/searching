import {HttpHeaders } from '@angular/common/http';
export class HeroConstants {
    public heroesUrl = 'api/heroes';  // URL to web api
    public httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
}