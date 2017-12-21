import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AppConstants } from '../appConstants';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockBackend } from '@angular/http/testing';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

export class MockClass {
  public logoutUser = () => {};
  public handler = undefined;
}


describe('AuthService', () => {
  let service: AuthService;
  let myServiceDependency: HttpClient;
  let myAppConstants: AppConstants;
  let myRouter: Router;

  beforeEach(() => {
    // service = new AuthService( MockClass, AppConstants, Router);
  });

  beforeEach(() => {
    // service = new AuthService( HttpClientTestingModule, <any>AppConstants, <any>Router);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AppConstants, Router],
      providers: [
        {provide: HttpClient, useClass: MockClass},
        // {provide: AppConstants, useClass: MockClass},
        {provide: Router, useClass: MockClass}
      ]
    });

    service = TestBed.get(AuthService);
    myServiceDependency = TestBed.get(HttpClient);
    myAppConstants = TestBed.get(myAppConstants);
    myRouter = TestBed.get(myRouter);
  });

  xit('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeDefined();
  }));
});
