import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {
  max_time = 10;
  count_down:any;
  remain_precent:any;
  time_interval = 0.01;
  bid_price = 3.99;
  product_name="Nintendo Switch";
  product_desc="Game console";
  price_label : any;
  reply:any;
  bid_reply:any;
  username:any;
  profile_pic:any;
  bid_status=true;
  people_bid = 4;
  user_credits=10;
  constructor() {
    this.count_down = this.max_time;
  }
  userlist = ["Peter","Mary","John"];
  replylist = ["","Hello all!","give me give me"];
  ngOnInit() {
    this.profile_pic = "http://clipground.com/images/facebook-profile-clipart-2.jpg";
    this.username = this.userlist[Math.floor((Math.random() * this.userlist.length))];
    this.reply = this.replylist[Math.floor((Math.random() * this.replylist.length))];
    this.price_label = this.bid_price.toFixed(2);
    setInterval(()=> {
      if(this.count_down<=0){
        this.updatetimer();
            this.people_bid++;
            this.profile_pic = "http://clipground.com/images/facebook-profile-clipart-2.jpg";
            this.username = this.userlist[Math.floor((Math.random() * this.userlist.length))];
            this.reply = this.replylist[Math.floor((Math.random() * this.replylist.length))];
      }
      this.count_down -= this.time_interval;
      this.count_down = this.count_down.toFixed(2);
      this.remain_precent = this.count_down/this.max_time*100;
    },this.time_interval*1000); 
     
  }
  updatetimer(){
    this.bid_status = true;
    this.count_down=this.max_time;
    this.bid_price += 0.01;
    this.price_label = this.bid_price.toFixed(2);

  }
  bid(){
    if(this.user_credits>0){
    this.profile_pic="http://tinypost.co/wp-content/uploads/2016/09/cute-profile-pics-for-whatsapp-images.png";
    this.username = "Carson";
    this.reply = this.bid_reply;
    this.user_credits -=1;
    this.updatetimer();}
    else{
      alert("Not enough credit.")
    }
  }
}
