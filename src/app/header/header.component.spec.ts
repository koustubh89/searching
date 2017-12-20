import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { AuthService } from '../security/auth.service';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../appConstants';
import { AuthModel } from '../security/auth.model';
import { catchError, map, tap } from 'rxjs/operators';
import { pipe } from 'rxjs/util/pipe';
import { Router } from '@angular/router';
import { HttpHandler } from '@angular/common/http';
import { Mock } from 'protractor/built/driverProviders';

export class MockClass {
  public logoutUser = () => {};
}

export class MockClassRouter {
  public navigateByUrl = () => {};
  public rootComponentType = () => {};
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: AuthService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    });

    TestBed.overrideComponent(HeaderComponent, {
      set: {
        providers: [
          {provide: AuthService, useClass: MockClass}
        ]
      }
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  beforeEach(() => {
    service = new AuthService(undefined, undefined, <any>MockClassRouter);
    component = new HeaderComponent(service);
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });

  xit('should have 1 menu item', () => {
    component.ngOnInit();
    expect(component.items.length === 1).toBeTruthy();
  });

  xit('should have sign out the user', () => {
    component.signout();
    spy = spyOn(MockClass.prototype, 'logoutUser');
    expect(component.signout).toHaveBeenCalled();
    expect(MockClass.prototype.logoutUser).toHaveBeenCalled();
  });
});
