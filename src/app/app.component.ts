import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface Item {
	name: string;
	description: string;
	isDone: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	list: Array<Item> = [];

	constructor(public dialog: MatDialog){
	}

	ngOnInit(){
		
	}

	deleteItem(index) {
		this.list.splice(index,1);
	}

	addItem(): void {
		let newItem: Item = {
			name: '',
			description: '',
			isDone: false
		}
	    const dialogRef = this.dialog.open(DialogAdd, {
	      width: '50%',
	      data: { name: '', newItem }
	    });

	    dialogRef.afterClosed().subscribe((result: any) => {
	      console.log('The dialog was closed');
	      if(result)
	      	this.list.splice(0,0, result);
	    });
	}

}


@Component({
  selector: 'create-item',
  templateUrl: './create-item.html',
  styleUrls: [ './create-item.scss']
})
export class DialogAdd {

  constructor(
    public dialogRef: MatDialogRef<DialogAdd>,
    @Inject(MAT_DIALOG_DATA) public data: Item) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
