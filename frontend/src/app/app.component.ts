import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './components/posts/dialogBox/dialogBox.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  constructor(public dialog: MatDialog,){
    
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogBoxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
