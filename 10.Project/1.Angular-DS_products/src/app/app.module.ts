import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { CreateComponent } from './create/create.component';

import{ HttpClientModule} from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductserviceService } from 'src/app/service/productservice.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryComponent,
    CreateComponent,
    ViewComponent,
    DeleteComponent,
    SearchComponent,
    UpdateComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ProductserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
