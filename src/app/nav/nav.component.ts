import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showTopTwo = false;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    // console.log(this.el.nativeElement);

  }
  ngDoCheck() {
    let t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t > 760) {
      this.showTopTwo = true;
    } else {
      this.showTopTwo = false;
    }

  }
}
