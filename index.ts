import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpModule } from "@angular/http";
import { WalmooNFCService } from "./src/walmoo-nfc.service";

export * from "./src/walmoo-nfc.service";

@NgModule({
  imports: [ HttpModule ],
  providers: [{ provide: Window,  useValue: window }]
})
export class WalmooNFCModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WalmooNFCModule,
      providers: [ WalmooNFCService ]
    };
  }
}
