import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../security/auth.service';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../appConstants';
import { AuthModel } from '../security/auth.model';
import { catchError, map, tap } from 'rxjs/operators';
import { pipe } from 'rxjs/util/pipe';
import { Router } from '@angular/router';
import { HttpHandler } from '@angular/common/http';
import { Mock } from 'protractor/built/driverProviders';
import { LoginComponent } from './login.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Message } from 'primeng/primeng';

export class MockClass {
  public logoutUser = () => {};
}

export class MockClassRouter {
  public navigateByUrl = () => {};
  public rootComponentType = () => {};
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const service = AuthService;
  // const spy: any;

  beforeAll(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    }).compileComponents().then( () => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    TestBed.overrideComponent(LoginComponent, {
      set: {
        providers: [
          {provide: AppConstants, useClass: MockClass},
          {provide: Router, useClass: MockClass},
          {provide: AuthService, useClass: MockClass}
        ]
      }
    });
    TestBed.compileComponents();
  }));

  xit('should create a login form', () => {
    expect(component).toBeTruthy();
  });
});
