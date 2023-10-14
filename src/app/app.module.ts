import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CredentialsInterceptor} from './core/interceptors/credentials.interceptor';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingRoutingModule} from './app-routing-routing.module';
import {HomeModule} from "./home/home.module";
import {AuthModule} from "./auth/auth.module";
import {TodosModule} from "./todos/todos.module";
import {UsersModule} from "./users/users.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingRoutingModule,
    HomeModule,
    AuthModule,
    TodosModule,
    UsersModule,
    SharedModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
