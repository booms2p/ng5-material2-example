import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() {}

  text = ['test1', 'test2', 'test3', 'test4', 'test5'];

  ngOnInit() {}
}
