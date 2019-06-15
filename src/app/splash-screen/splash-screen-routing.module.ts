import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SplashScreenComponent } from "./splash-screen.component";

const routes: Routes = [
    { path: "default", component: SplashScreenComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SplashScreenRoutingModule { }
