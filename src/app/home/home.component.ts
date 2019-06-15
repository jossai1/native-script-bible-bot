import { Component, OnInit } from "@angular/core";
import { BibleDataService } from "~/app/services/bible-data.service";
import { SharedService } from "~/app/services/shared.service";
import { Issue } from "~/app/models/issue";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

export interface ICategory {
    name: string;
    active: boolean;
}

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    providers: [BibleDataService]
})

export class HomeComponent implements OnInit {

    issueData: Array<Issue> = [];
    searchText: string;
    activeCats = 0;
    categories: Array<ICategory> = [
        {name: "love", active: false},
        {name: "anxious", active: false},
        {name: "temptation", active: false},
        {name: "stress", active: false},
        {name: "sin", active: false},
        {name: "health", active: false},
        {name: "sad", active: false},
        {name: "trouble", active: false},
        {name: "family", active: false},
        {name: "lonely", active: false},
        {name: "help", active: false},
        {name: "direction", active: false},
        {name: "health", active: false},
        {name: "tired", active: false},
        {name: "backslide", active: false},
        {name: "doubt", active: false},
        {name: "greed", active: false},
        {name: "justice", active: false},
        {name: "pride", active: false},
        {name: "marriage", active: false}
    ];
    showFilter: boolean;
    filteredVerses: Array<Issue> = [];

    constructor(private bibleDataService: BibleDataService,
                private sharedService: SharedService,
                private route: ActivatedRoute,
                private routerExtensions: RouterExtensions) {

        // // fix to get the twitter button to load when user lands on page
        // document.getElementById("script").remove();
        // const testScript = document.createElement("script");
        // testScript.setAttribute("id", "script");
        // testScript.setAttribute("src", "https://platform.twitter.com/widgets.js");
        // document.body.appendChild(testScript);
        // //
    }

    ngOnInit() {
        this.issueData = this.bibleDataService.getAllIssueData();
        this.filteredVerses = this.issueData;
        // console.log (this.issueData);
    }

    displayVerse(verseId: number, issue: string) {
        // now navigate to the displayverse comp.
        // 'relativeto' is  required - Enables relative navigation from the current ActivatedRoute.
        this.routerExtensions.navigate(["../verse-display", verseId], {relativeTo: this.route});
    }

    toggle(catObj: any) {
        if (catObj.active === false) {
            this.activateButton(catObj);
            this.addCatToFilter(catObj);
        } else {
            // do nothing
            // this.deactivateButton(catObj);
        }
    }

    toggleFilters() {
        this.showFilter ? this.showFilter = false : this.showFilter = true;
    }

    filterByCategory(catName) {
        const previousFilteredVerses = this.filteredVerses;
        const newFilteredVerses = this.issueData.filter((issueObj) => {
            const res = this.iskeywordInIssueObjKeywordArray(issueObj, catName);
            if (this.activeCats > 1) {
                // [solve duplicate issue] if the verse is already in our filtered array don't add it again
                const isInIssueArray = this.isInIssueArray(issueObj.verseID, previousFilteredVerses);
                // if we found the cat in the keywprds and it's not been added before - add it
                if (res === true && isInIssueArray === true) {
                    // console.log('seen b4', issueObj['issue']);

                } else {
                    // console.log('not seen before' , issueObj['issue']);
                    return res;
                }
            } else {
                return res;
            }
        });
        if (this.activeCats > 1) {
            this.filteredVerses = previousFilteredVerses.concat(newFilteredVerses);
        } else {
            this.filteredVerses = newFilteredVerses;
        }

        // console.log('hi', this.filteredVerses);
    }

    isInIssueArray(verseID: number, previousFilteredVerses: Array<any>): boolean {
        let foundIt = false;
        previousFilteredVerses.forEach((issueObj) => {
            if (issueObj.verseID === verseID) {
                foundIt = true;
                // console.log('found', verseID);
            }
        });

        return foundIt;
    }

    iskeywordInIssueObjKeywordArray(issueObjKeywordArray: any, searchKeyword: string): any {
        searchKeyword = searchKeyword.toLowerCase();
        // this has a better UX - user doesn't have to spell full word
        let foundOne = false;
        issueObjKeywordArray.keywords.forEach((word) => {
            word = word.toLowerCase();

            if (word.includes(searchKeyword)) {
                foundOne = true;
            }
        });

        return foundOne;
    }

    removeAllFilters() {
        this.filteredVerses = this.issueData;
        this.activeCats = 0;
        this.categories.forEach((catObj) => catObj.active = false);
    }

    private addCatToFilter(catObj: any) {
        this.activeCats++;
        this.filterByCategory(catObj.name);
    }

    private deactivateButton(catObj: any) {
        catObj.active = false;
    }

    private activateButton(catObj: any) {
        catObj.active = true;
    }
}
