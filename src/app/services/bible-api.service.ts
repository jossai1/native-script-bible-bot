import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BibleApiService {

  constructor(private http: HttpClient) { }

  fetchVerse(verse: string): Promise<any> {
    console.log("getting bible stuff");
    const url = "https://labs.bible.org/api/?passage=" + verse + "&type=json";

    return this.http.get(url)
      .toPromise()
      .then((response) => response)
      .catch(this.handleError);

  }

  private handleError(error: any) {
    console.error("An error occurred", error);

    return Promise.reject(error.message || error);
  }
}
