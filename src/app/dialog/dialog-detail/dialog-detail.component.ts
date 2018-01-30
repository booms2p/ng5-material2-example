import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.css']
})
export class DialogDetailComponent implements OnInit {

  selectedItem = '';
  res = {type: '', selectedItem: ''};
  dataList = [];

  constructor(
    public dialogRef: MatDialogRef<DialogDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  confirmDialog(selected): void {
    this.res.type = this.data.type;
    this.res.selectedItem = selected;

    this.dialogRef.close(this.res);
  }

  ngOnInit() {
    this.dataList = [];
    for (const item of this.data.items) {
      if (item.label && item.value) {
        this.dataList.push(item);
      }
    }
  }

}
