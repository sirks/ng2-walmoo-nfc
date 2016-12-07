import { Injectable, EventEmitter } from "@angular/core";

declare var window: Window;
@Injectable()
export class WalmooNFCService {

  window;

  constructor() {
    this.window = window;
    this.setupApplet();
  }

  /* TODO: should work with injection
  constructor(private window: Window) {
    this.setupApplet();
  }*/

  public onNewScan: EventEmitter<NewScanEvent> = new EventEmitter<NewScanEvent>();

  public getSmthCoolFromService(param: string) {
    return param;
  }

  public tryWindow() {
    return this.window.closed;
  }

  private setupApplet() {
    this.window = Object.assign(this.window, {
      java_nfc: this.java_nfc,
      java_mac: this.java_mac,
      java_qr: this.java_qr,
      java_talk: this.java_talk,
      java_ready: this.java_ready
    });

  }

  private java_nfc(uid: any) {
    console.log("Java-nfc says:" + uid);
  }
  private java_mac(mac: any) {
    console.log("Java-mac says:" + mac);
  }
  private java_qr(qr: any) {
    console.log("Java-qr says:" + qr);
  }
  private java_talk(code: any, msg: any) {
    console.log("Java-talk says:" + code + " - " + msg);
  }
  private java_ready() {
    console.log("Java is ready");
  }
}

export interface NewScanEvent {
  lala: string;
}
