import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { TreeSelectModule } from 'primeng/treeselect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/detail/detail.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    LoginComponent,
    DetailComponent,
    NewGameComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    GalleriaModule,
    FormsModule,
    InputTextModule,
    MultiSelectModule,
    InputNumberModule,
    ChipsModule,
    InputMaskModule,
    TreeSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
