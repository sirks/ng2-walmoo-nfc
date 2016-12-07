import { NgModule, ModuleWithProviders } from "@angular/core";
import { WalmooNFCService } from "./src/walmoo-nfc.service";

@NgModule({
  providers: [{ provide: Window,  useValue: window }]
})
export class WalmooNFCModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WalmooNFCModule,
      providers: [ WalmooNFCService, { provide: Window, useValue: window } ]
    };
  }
}

export { WalmooNFCService as WalmooService } from "./src/walmoo-nfc.service";