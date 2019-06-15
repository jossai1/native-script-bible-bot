import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class SharedService {
  selectedVerse: any;
  issueTitle: string;

  constructor() { }

  setSelectedVerse(selectedVerse: any) {
    this.selectedVerse = selectedVerse;
    console.log("set the selectedverse", this.selectedVerse);
  }

  getSelectedVerse(): any {
    return this.selectedVerse;
  }

  setIssueTitle(issueTitle: string) {
    this.issueTitle = issueTitle;
    console.log("setting issueTitle", this.selectedVerse);
  }

  getIssueTitle(): any {
    return this.issueTitle;
  }

}
