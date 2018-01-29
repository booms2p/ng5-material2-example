import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.css']
})
export class DialogDetailComponent implements OnInit {

  selectedItem = '';

  constructor(
    public dialogRef: MatDialogRef<DialogDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  confirmDialog(data): void {
    this.dialogRef.close(data);
  }

  ngOnInit() {
  }

}
