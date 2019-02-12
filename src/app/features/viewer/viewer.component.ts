import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  template: `
    <div class="bg">
      <img src="https://picsum.photos/600/400?image=10">
    </div>
  `,
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
