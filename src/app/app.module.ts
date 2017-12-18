import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AsteroidsComponent } from './components/asteroids/asteroids.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpService } from './services/http/http.service';
import { AsteroidsService } from './services/asteroids/asteroids.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { FastestComponent } from './components/fastest/fastest.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    AsteroidsComponent,
    PageNotFoundComponent,
    HomeComponent,
    FastestComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HttpService,
    AsteroidsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
