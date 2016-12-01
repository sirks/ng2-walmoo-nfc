import { Injectable, EventEmitter } from "@angular/core";
import "rxjs";
import "rxjs/add/observable/of";
import "rxjs/add/operator/share";
import "rxjs/add/operator/map";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/toArray";

export interface NewScanEvent {
  lala: string;
}

@Injectable()
export class WalmooNFCService {

  constructor(private window: Window) {
    this.setupApplet();
  }

  public onNewScan: EventEmitter<NewScanEvent> = new EventEmitter<NewScanEvent>();

  public getSmthCoolFromService(param: string) {
    return param;
  }

  public tryWindow() {
    return this.window.closed;
  }

  private setupApplet() {
    this.window["java_nfc"]   = this.java_nfc;
    this.window["java_mac"]   = this.java_mac;
    this.window["java_qr"]    = this.java_qr;
    this.window["java_talk"]  = this.java_talk;
    this.window["java_ready"] = this.java_ready;
  }

  private java_nfc(uid) {
    console.log("Java-nfc says:" + uid);
  }
  private java_mac(mac) {
    console.log("Java-mac says:" + mac);
  }
  private java_qr(qr) {
    console.log("Java-qr says:" + qr);
  }
  private java_talk(code,msg) {
    console.log("Java-talk says:" + code + " - " + msg);
  }
  private java_ready() {
    console.log("Java is ready");
  }


}
