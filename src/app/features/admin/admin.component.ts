import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  images: string[] = [];
  activeImage: number = 0;

  setActiveImage(val: number) {
    this.activeImage = val
    this.db.object('presentation/activeImage').set(val)
  }

  setImages(val: string[]) {
    this.images = val
    this.db.object('presentation/images').set(val)
  }

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.object('presentation').valueChanges().subscribe((val: any) => {
      //console.log(val);
      this.images = val.images;
      this.activeImage = val.activeImage
    });
  }

  addImage(url: string) {
    this.setImages([...this.images, url])
  }

  generateRandomImage() {
    let r = Math.floor(Math.random()*200)
    let url = 'https://picsum.photos/600/400?image=' + r
    this.addImage(url)
  }

  delete(url: string) {
    if (this.images.length <= 1) {
      return
    }
    if (this.activeImage === this.images.length-1) {
      this.setActiveImage(this.activeImage-1)
    }
    this.setImages(this.images.filter(item => item !== url))
  }

  prev() {
    if (this.activeImage > 0) {
      this.setActiveImage(this.activeImage-1)
    }
  }

  next() {
    if (this.activeImage < this.images.length-1) {
      this.setActiveImage(this.activeImage+1)
    }
  }
}
