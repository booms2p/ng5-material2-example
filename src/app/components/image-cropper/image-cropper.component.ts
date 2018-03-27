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

  public config: EditorOptions = {
    ImageName: 'Some image',
    AspectRatios: ['4:3', '16:9'],
    ImageUrl:
      'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg',
    ImageType: 'image/jpeg'
  };

  public close() {
    console.log('this is close')
  }

  public getEditedFile(file: File) {
    console.log(file)}
}
