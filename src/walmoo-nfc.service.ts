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

  constructor(private window: Window) {}

  public onNewScan: EventEmitter<NewScanEvent> = new EventEmitter<NewScanEvent>();

  public getSmthCoolFromService(param: string) {
    return param;
  }

  public tryWindow() {
    return this.window.closed;
  }
}
