import { Component, OnInit } from "@angular/core";
import { BibleDataService } from "~/app/services/bible-data.service";
import { SharedService } from "~/app/services/shared.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { BibleApiService } from "~/app/services/bible-api.service";

@Component({
    selector: "VerseDisplay",
    moduleId: module.id,
    templateUrl: "./verse-display.component.html",
    styleUrls: ["./verse-display.component.scss"],
    providers: [BibleApiService, BibleDataService]
})
export class VerseDisplayComponent implements OnInit {

    issueTitle: string;
    error: any;
    loadedVerses: Array<object> = [];
    currentVerseID: number;
    displayVerses = false;
    issueData: any;
    verseData: any;

    constructor(private sharedService: SharedService,
                private route: ActivatedRoute,
                private routerExtensions: RouterExtensions,
                private bibleAPIService: BibleApiService,
                private bibleDataService: BibleDataService) {

        this.currentVerseID = this.route.snapshot.params.id;
        console.log("the current verse id being displayed: " + this.currentVerseID);
    }

    ngOnInit() {
        this.sharedService.setSelectedVerse(this.currentVerseID);
        this.verseData = this.bibleDataService.fetchVerse(this.currentVerseID);
        this.issueData = this.bibleDataService.fetchIssueData(this.currentVerseID);

        // console.log(this.verseData);
        // console.log(this.issueData);

        if (this.verseData !== null && this.issueTitle !== null) {
            this.issueTitle = this.issueData.issue;
            console.log("fetching VersesTextFromApi");
            this.fetchVersesTextFromApi();
        } else {
            // navigate back to home if null - means user has come put in an invalid verseid
            this.routerExtensions.navigate(["home"]);
        }
    }

    goBack() {
        this.routerExtensions.back();
    }

    fetchVersesTextFromApi() {
        const verses = this.verseData.verses;
        console.log("about to call api");
        for (let i = 0; i < verses.length; i++) {
            const verse: string = verses[i];
            let verseAPIData;
            this.bibleAPIService
                .fetchVerse(verse)
                .then((data) => verseAPIData = data)
                .then(() => {
                    this.loadedVerses.push({verseApiData: verseAPIData, verseDetails: verse});
                    this.displayVerses = true;
                })
                .catch((error) => this.error = error);
        }
    }

    prepareHtml(verse, text): string {
        const verseStr: string = "<span style='color: #F96D52'>" + verse + "</span>";
        const textStr: string = "<span style='color: #F96D52'>" + text + "</span>";

        return "<span>" + verseStr + " " + textStr + "</span>";
    }
}
