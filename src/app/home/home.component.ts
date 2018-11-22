import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private products:Array<Product>;
  private contacts:Array<Contact>;
  isVisible = false;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product("../../assets/img/n1.jpg","移动支付来袭 停车场转向“无人值守”",1332),
      new Product("../../assets/img/n2.jpg","沈阳“智慧停车”来了，路边停一天得交多少钱？",1568),
      new Product("../../assets/img/n3.png","35个重点城市公共停车场收费价格对比分析",1024),
      new Product("../../assets/img/n4.jpg","中国人又一次攻克停车难，未来小区停车太容易了",1782),
      new Product("../../assets/img/n5.jpg","中国“堵城”新鲜出炉，首堵竟然是它？",1445),
      new Product("../../assets/img/n6.png","北京新规：公共停车场按不低于10%比例建充电设施",1667),
      new Product("../../assets/img/n7.jpg","沈阳路边智慧停车收费区域及收费标准一览",1882),
      new Product("../../assets/img/n8.jpg","破解都市停车难，看沈阳“智慧停车”怎么出招",1452),
    ]
    this.contacts = [
      new Contact("../../assets/img/tel.png","服务热线","010-82743605"),
      new Contact("../../assets/img/email.png","商务合作","fengyangang@zhumengyuan.com"),
      new Contact("../../assets/img/location.png","公司地址","北京市海淀区上地三街中黎科技园2层C223")
    ]
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


}
export class Product {
  constructor(
    public img:string,
    public title:string,
    public price:number,
  ){}
    
}
export class Contact {
  constructor(
    public img:string,
    public title:string,
    public price:string,
  ){}
    
}
