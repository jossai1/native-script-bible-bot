import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { VerseDisplayComponent } from "~/app/verse-display/verse-display.component";

const routes: Routes = [
    { path: "default", component: HomeComponent },
    { path: "item/:id", component: ItemDetailComponent },
    {  path: "verse-display/:id",  component: VerseDisplayComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
