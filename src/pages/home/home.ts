import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PacketService } from '../../providers/packet-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
private packets: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public packetService: PacketService) {

  }

  ionViewDidLoad(){
    this.packetService.getPackets().subscribe( packets => {this.packets = packets;
    })
  }

}
