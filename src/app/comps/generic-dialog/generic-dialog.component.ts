import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.css']
})
export class GenericDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<GenericDialogComponent>,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    data.content = data.content? sanitizer.bypassSecurityTrustHtml(data.content): null;
    data.actions = data.actions? sanitizer.bypassSecurityTrustHtml(data.actions): null;
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
