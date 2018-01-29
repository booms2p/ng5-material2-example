import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogDetailComponent } from './dialog-detail/dialog-detail.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  selectedItem = '';

  openDialog() {
    const dialogRef  = this.dialog.open(DialogDetailComponent, {
      data: {
        items: [
          {'label': 'item01', 'value': 'itm01'},
          {'label': 'item02', 'value': 'itm02'},
          {'label': 'item03', 'value': 'itm03'},
        ]
      }
    });

    dialogRef.afterClosed().subscribe(selectedItem => {
      console.log('The dialog was closed');
      this.selectedItem = selectedItem;
    });
  }

  ngOnInit() {
  }

}
