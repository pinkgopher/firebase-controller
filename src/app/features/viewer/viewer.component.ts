import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  activeImage: string

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.object('presentation').valueChanges().subscribe((val: any) => {
      this.activeImage = val.images[val.activeImage]
    });
  }

}
