import { DialogComponent } from './dialog/dialog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';

const routes: Routes = [
  {path: 'picklist', component: DialogComponent},
  {path: 'imageCropper', component: ImageCropperComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
