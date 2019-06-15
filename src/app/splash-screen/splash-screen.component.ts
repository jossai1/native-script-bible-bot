import { Component, OnInit } from "@angular/core";

@Component({
    selector: "SplashScreen",
    moduleId: module.id,
    templateUrl: "./splash-screen.component.html"
})
export class SplashScreenComponent implements OnInit {
    constructor() {
        console.log("hio");
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
