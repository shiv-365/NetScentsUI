import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertController} from 'ionic-angular';
import {Observable} from 'rxjs';

@Injectable()
export class PacketService{

public API = "http://localhost:8080/";

constructor(public http: HttpClient, private alertCtrl: AlertController){

}

getPackets(): Observable<any> {
    return this.http.get(this.API + 'packets');
}




}