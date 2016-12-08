import { Injectable } from "@angular/core";
import "rxjs";
import { Subject, Observable } from "rxjs";

declare var window: Window;
@Injectable()
export class WalmooNFCService {

  private window;
  private nfcScanEmitter;

  constructor() {
    this.window = window;
    this.nfcScanEmitter = new Subject<NFCScan>();
    this.setupApplet();
  }

  /* TODO: should work with injection
  constructor(private window: Window) {
    this.setupApplet();
  }*/

  private setupApplet() {
    this.window = Object.assign(this.window, {
      java_nfc: this.java_nfc.bind(this),
      java_mac: this.java_mac.bind(this),
      java_qr: this.java_qr.bind(this),
      java_talk: this.java_talk.bind(this),
      java_ready: this.java_ready.bind(this)
    });

  }

  private java_nfc(uid: any) {
    this.nfcScanEmitter.next({uid: uid});
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

  public getNFCObservable(): Observable<NFCScan> {
    return this.nfcScanEmitter.asObservable();
  }
}

export interface NFCScan {
  uid: string;
}
