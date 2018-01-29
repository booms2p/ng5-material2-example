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

  selectedItemA = '';
  selectedItemB = '';
  itemType = '';
  dataA = [
    {'label': 'item01', 'value': 'itm01'},
    {'label': 'item02', 'value': 'itm02'},
    {'label': 'item03', 'value': 'itm03'},
  ];

  dataB = [
    {'label': 'B-01', 'value': 'B01'},
    {'label': 'B-02', 'value': 'B02'},
    {'label': 'B-03', 'value': 'B03'},
  ];

  openDialog(type) {
    const dialogRef  = this.dialog.open(DialogDetailComponent, {
      data: {
        type: type,
        items: type === 'A' ? this.dataA : type === 'B' ? this.dataB : null
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log('The dialog was closed');
      this.itemType = '';
      this.itemType = res.type;

      if(res.type === 'A') {
        this.selectedItemA = res.selectedItem;
      } else if (res.type === 'B') {
        this.selectedItemB = res.selectedItem;
      }
    });
  }

  ngOnInit() {
  }

}
