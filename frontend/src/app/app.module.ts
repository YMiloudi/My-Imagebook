import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutMeComponent } from './components/aboutme/aboutme.component';
import { DialogBoxComponent } from './components/posts/dialogBox/dialogBox.component';
import { PostImagesComponent } from './images/image-postImages-list/postImages-list.component';
import { ImageInfoComponent } from './images/image-info/image-info.component';
import { FilterPostsComponent } from './components/filter-posts/filter-posts.component';
import { MenuItemComponent } from './components/filter-posts/menu-item/menu-item.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AboutMeComponent,
    DialogBoxComponent,
    PostImagesComponent,
    ImageInfoComponent,
    FilterPostsComponent,
    MenuItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule, 
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    AuthModule,
    FormsModule,
  ],
  entryComponents: [
    DialogBoxComponent,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
