import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule, MatButtonModule, MatCardModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { DialogComponent } from './dialog/dialog.component';
import { DialogDetailComponent } from './dialog/dialog-detail/dialog-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main/main.component';
import { PostComponent } from './main/post/post.component';
import { NewPostComponent } from './main/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogDetailComponent,
    MainComponent,
    PostComponent,
    NewPostComponent
  ],
  entryComponents: [
    DialogComponent,
    DialogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
