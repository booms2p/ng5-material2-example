import { MainComponent } from './main/main.component';
import { DialogComponent } from './dialog/dialog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './main/new-post/new-post.component';

const routes: Routes = [
  { path: 'picklist', component: DialogComponent },
  { path: '', component: MainComponent },
  { path: 'newPost', component: NewPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
