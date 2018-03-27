import { Component, OnInit } from '@angular/core';
import { EditorOptions } from 'ngx-image-editor';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  imageFile
  cropFile

  public config: EditorOptions = {
    ImageName: 'Some image',
    AspectRatios: ['4:3', '16:9'],
    ImageType: 'image/jpeg'
  }

  public close(event) {
    console.log(event)
  }

  public getEditedFile(file) {
    console.log(file)
    this.cropFile = file.src
  }

  setImageUrl(event) {
    console.log(event)
    this.imageFile = event.target.files[0]
    console.log(this.imageFile)
    this.config.File = this.imageFile
  }
}
