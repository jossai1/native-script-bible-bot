import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { VerseDisplayComponent } from "./verse-display.component";

const routes: Routes = [
    { path: "default", component: VerseDisplayComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class VerseDisplayRoutingModule { }
