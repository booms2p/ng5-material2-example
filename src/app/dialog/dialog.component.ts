import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogDetailComponent } from './dialog-detail/dialog-detail.component';
import { DialogPicklistComponent } from './dialog-picklist/dialog-picklist.component';
import * as fs from 'file-saver';

import { Workbook } from 'exceljs';

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
    { label: 'item01', value: 'itm01' },
    { label: 'item02', value: 'itm02' },
    { label: 'item03', value: 'itm03' }
  ];

  dataB = [
    { label: 'B-01', value: 'B01' },
    { label: 'B-02', value: 'B02' },
    { label: 'B-03', value: 'B03' }
  ];

  addMember(type) {
    const template = { label: '', value: '' };
    if (type === 'A') {
      this.dataA.push(template);
    } else if (type === 'B') {
      this.dataB.push(template);
    }
  }

  removeMember(type, index) {
    if (type === 'A') {
      this.dataA.splice(index, 1);
    } else if (type === 'B') {
      this.dataB.splice(index, 1);
    }
  }

  openDialog(type) {
    const dialogRef = this.dialog.open(DialogDetailComponent, {
      height: 'auto',
      width: 'auto',
      data: {
        type: type,
        items: type === 'A' ? this.dataA : type === 'B' ? this.dataB : null,
        oldValue:
          type === 'A'
            ? this.selectedItemA
            : type === 'B'
              ? this.selectedItemB
              : ''
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(res => {
      // console.log('The dialog was closed');
      this.itemType = '';
      this.itemType = res ? res.type : '';

      if (res && res.type === 'A') {
        this.selectedItemA = res.selectedItem;
      } else if (res && res.type === 'B') {
        this.selectedItemB = res.selectedItem;
      }
    });
  }

  openPickListDialog(type) {
    const dialogRef = this.dialog.open(DialogPicklistComponent, {
      data: {},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {}

  genXlsx() {
    const workbook = new Workbook();

    workbook.addWorksheet('Boom Sheet', {
      properties: { tabColor: { argb: 'ffffff' } }
    });

    const boomSheet = workbook.getWorksheet('Boom Sheet');

    // boomSheet.getCell('A1').dataValidation = {
    //   type: 'list',
    //   allowBlank: true,
    //   formulae: ['"One,Two,Three,Four"']
    // };

    // boomSheet.addRow({id: 2, name: 'Jane Doe', dob: new Date(1965,1,7)});

    boomSheet.columns = [
      {
        header: 'Id',
        key: 'id',
        width: 10
      },
      { header: 'Name', key: 'name', width: 32 },
      { header: 'D.O.B.', key: 'dob', width: 10, outlineLevel: 1 },
      { header: 'TEST', key: 'column4', width: 10, outlineLevel: 1 }
    ];

    boomSheet.addRow({id: '1', name: 'John Doe', dob: new Date(1970,1,1), column4: '1234'});
    boomSheet.addRow({id: '', name: 'John Doe', dob: new Date()});

    boomSheet
      .getColumn('A')
      .eachCell({ includeEmpty: false }, function(cell, rowNumber) {
        const cellName = `A${rowNumber.toString()}`;

        boomSheet.getCell(cellName).dataValidation = {
          type: 'list',
          allowBlank: true,
          formulae: ['"One,Two,Three,Four"']
        };

        boomSheet.getCell(cellName).font = {
          color: { argb: 'FF4343' }
        };
      });

    workbook.xlsx.writeBuffer().then(data => {
      const blob = new Blob([data], {
        type:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      fs.saveAs(blob, 'TEST_GEN_XLSL.xlsx');
    });
  }
}
