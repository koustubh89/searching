// directives and pipes will come in declarations
// services will come in providers
// main bootstrap component will come in bootstrap

// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Prime ng
import { InputTextModule, PasswordModule, ButtonModule, MessagesModule, MessageModule, GrowlModule, MenubarModule,
  AutoCompleteModule} from 'primeng/primeng';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

// service
import { AuthGuard } from './security/auth-guard.guard';
import { AuthService } from './security/auth.service';

// directive
import { HighlightDirective } from './highlight.directive';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// classes/constants
import { AppConstants } from './appConstants';
// pipes
import { PipeExamplePipe } from './pipe-example.pipe';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { LookupService } from './lookup.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
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
    MenubarModule,
    AutoCompleteModule
  ],
  providers: [AppConstants, AuthGuard, AuthService, LookupService],
  bootstrap: [AppComponent]
})

export class AppModule { }
