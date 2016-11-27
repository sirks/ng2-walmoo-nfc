import { Injector } from "@angular/core";
import { XHRBackend, HttpModule } from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { getTestBed, TestBed } from "@angular/core/testing";
import { WalmooNFCService, WalmooNFCModule } from "../ng2-walmoo-nfc";

describe('WalmooNFCService', () => {
  let injector: Injector;
  let backend: MockBackend;
  let nfc: WalmooNFCService;
  let connection: MockConnection; // this will be set when a new connection is emitted from the backend.

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, WalmooNFCModule.forRoot()],
      providers: [
        {provide: XHRBackend, useClass: MockBackend}
      ]
    });
    injector = getTestBed();
    backend = injector.get(XHRBackend);
    nfc = injector.get(WalmooNFCService);
    // sets the connection when someone tries to access the backend with an xhr request
    backend.connections.subscribe((c: MockConnection) => connection = c);
  });

  afterEach(() => {
    injector = undefined;
    backend = undefined;
    nfc = undefined;
    connection = undefined;
  });

  it('is defined', () => {
    expect(WalmooNFCService).toBeDefined();
    expect(nfc).toBeDefined();
    expect(nfc instanceof WalmooNFCService).toBeTruthy();
  });

  it('should be able to call methods', () => {
    expect(nfc.getSmthCoolFromService("bebe")).toBeDefined();
    expect(nfc.getSmthCoolFromService("bebe")).toEqual("bebe");
  });

  it('window should be injected', () => {
    // TODO: implement me
  });

  it('should be able to call window-related functions', () => {
    expect(nfc.tryWindow()).toBeDefined();
    expect(nfc.tryWindow()).toEqual(false);
  });

});
