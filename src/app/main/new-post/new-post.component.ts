import { Component, OnInit, ViewChild } from '@angular/core';
declare const Cropper: any;
// import * as Cropper from 'cropperjs';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  constructor() {}

  imageFile: any;
  cropper: any;
  croppedImg: string;

  @ViewChild('myImage') myImage: any;

  ngOnInit() {
    // this.initCropper();
  }

  initCropper() {
    let image = document.getElementById('postImage');
    this.cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      viewMode: 0,
      dragMode: 'crop',
    });
  }

  setImageUrl(event) {
    let reader = new FileReader();

    reader.onload = () => {
      this.imageFile = reader.result;
      // this.initCropper();
    };
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      // NOTE since getting the base64 image url happens asynchronously we need to initializeCropper after
      // the image has been loaded.
      this.initCropper();
    };
  }

  crop(imageType) {
    // console.log(this.cropper.crop());
    this.croppedImg = this.cropper.getCroppedCanvas({imageSmoothingQuality: 'high'}).toDataURL(imageType || 'image/jpeg');
  }
}
