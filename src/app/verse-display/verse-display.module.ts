import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { VerseDisplayRoutingModule } from "./verse-display-routing.module";
import { VerseDisplayComponent } from "./verse-display.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        VerseDisplayRoutingModule
    ],
    declarations: [
        VerseDisplayComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class VerseDisplayModule { }
