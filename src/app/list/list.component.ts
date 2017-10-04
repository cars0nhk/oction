import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = [
    {
      "name":"MBP i7 256GB 16GB RAM",
      "img":"https://cnet2.cbsistatic.com/img/JXyLBVj1zKQ334jqQCXAMHjZhBI=/770x433/2017/06/06/552793fa-911b-44a7-a3fb-44a1307803fd/apple-macbook-pro-touch-bar-15-inch-2017-4201.jpg",
      "time":"Oct 4, 2017 at 11:59pm",
      "type":"REGULAR",
      "price":"15,000"
    },{
      "name":"Dyson",
      "img":"http://ksassets.timeincuk.net/wp/uploads/sites/54/2017/05/dyson-v8-absolute-8-1.jpg",
      "time":"Oct 5, 2017 at 11:59pm",
      "type":"REPID",
      "price":"4,000"
    },{
      "name":"BOOST BOARD",
      "img":"https://4d0850cecf2c5ce919d5-17b283ac00835b5ced4db83c898330a1.ssl.cf1.rackcdn.com/15958973_boost-your-commute-with-boosted-board-2_tbc083ccf.jpg",
      "time":"Oct 6, 2017 at 11:59pm",
      "type":"REGULAR",
      "price":"3,000"
    },{
      "name":"DJI",
      "img":"https://videocaption.djicdn.com/upload/poster/20170523/7ad238093525bf242f54a87f3e64e0dd.jpg",
      "time":"Oct 8, 2017 at 11:59pm",
      "type":"REGULAR",
      "price":"9,000"
    },{
      "name":"GoPro",
      "img":"https://icdn4.digitaltrends.com/image/gopro-hero-4-black-front-full-800x533-c.jpg?ver=1",
      "time":"Oct 9, 2017 at 11:59pm",
      "type":"REPID",
      "price":"4,000"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
