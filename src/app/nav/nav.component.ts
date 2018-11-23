import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor(private el:ElementRef) { }

  ngOnInit() {
    // console.log(this.el.nativeElement);
  
  }
  ngDoCheck(){
    // console.log(this.el.nativeElement);
    let t = document.documentElement.scrollTop||document.body.scrollTop;
    console.log(t)
    if(t>848){
      this.el.nativeElement.querySelector('.nav-top').style.background = 'rgb(88, 76, 222)';
    }else{
      this.el.nativeElement.querySelector('.nav-top').style.background = '';
    }
    
  }
}
