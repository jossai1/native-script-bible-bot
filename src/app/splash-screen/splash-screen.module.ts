import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SplashScreenRoutingModule } from "./splash-screen-routing.module";
import { SplashScreenComponent } from "./splash-screen.component";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        SplashScreenRoutingModule
    ],
    declarations: [
        SplashScreenComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SplashScreenModule { }
