// directives and pipes will come in declarations
// services will come in providers
// main bootstrap component will come in bootstrap

// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// http client in memory is used to intercepts the api calls and apply them to an in-memory data store
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// Prime ng
import { InputTextModule, PasswordModule, ButtonModule, MessagesModule, MessageModule, GrowlModule, MenubarModule } from 'primeng/primeng';

// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

// service
import { HeroService } from './hero.service';
import { AuthGuard } from './security/auth-guard.guard';
import { AuthService } from './security/auth.service';

// directive
import { HighlightDirective } from './highlight.directive';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// classes/constants
import { HeroConstants } from './heroConstants';
import { AppConstants } from './appConstants';
// pipes
import { PipeExamplePipe } from './pipe-example.pipe';
import { MenuComponent } from './menu/menu.component';
import { DemoComponent } from './demo/demo.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeroesComponent,
    HeroDetailComponent,
    HighlightDirective,
    HeaderComponent,
    DashboardComponent,
    HeroSearchComponent,
    PipeExamplePipe,
    MenuComponent,
    DemoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    GrowlModule,
    MenubarModule
  ],
  providers: [AppConstants, HeroService, HeroConstants, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
