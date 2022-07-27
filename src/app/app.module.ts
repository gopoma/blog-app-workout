import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AdminPanelPageComponent } from './pages/admin-panel-page/admin-panel-page.component';
import { PostComponent } from './components/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormatPostDatePipe } from './pipes/format-post-date.pipe';

const routes: Route[] = [
  {path:"", component:HomePageComponent},
  {path:"register", component:RegisterPageComponent},
  {path:"login", component:LoginPageComponent},
  {path:"admin", component:AdminPanelPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AdminPanelPageComponent,
    PostComponent,
    FormatPostDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
