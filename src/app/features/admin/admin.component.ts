import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { defineBase } from '@angular/core/src/render3';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  items: string[] = [];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.object('presentation').valueChanges().subscribe((val: any) => {
      //console.log(val);
      this.items = val.images;
    });
  }

  addImage(url: string) {
    this.items = [...this.items, url]
    this.db.object('presentation/images').set(this.items)
  }

  generateRandomImage() {
    let r = Math.floor(Math.random()*200)
    let url = 'https://picsum.photos/600/400?image=' + r
    this.addImage(url)
  }

  delete(url: string) {
    this.items = this.items.filter(item => item !== url)
    this.db.object('presentation/images').set(this.items)
  }
}
