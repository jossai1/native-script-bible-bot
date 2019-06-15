import { Injectable } from "@angular/core";
import { Issue } from "~/app/models/issue";

@Injectable({
  providedIn: "root"
})

export class BibleDataService {

  // all bible data
  issueData: Array<Issue> = [
    {issue: "Feeling down", verseID: 0, keywords: ["depressed", "depression", "unhappy", "feeling down", "blue", "sad", "feeling blue"]},
    {issue: "Tempted to do wrong" , verseID: 1, keywords: ["tempt", "temptation", "tempted", "sin", "wrong"]},
    {issue: "In danger" , verseID: 2, keywords: ["physical", "danger", "harm", "trouble", "anxiety"]},
    {issue: "Discouraged" , verseID: 3, keywords: ["discouraged", "disheartened", "depression", "down", "depressed", "sad"]},
    {issue: "Feeling bored" , verseID: 4, keywords: ["dull", "idleness", "fatigued", "sick", "tired", "bored", "boredom"]},
    {issue: "Afraid" , verseID: 7, keywords: ["Afraid", "apprehensive", "frightened", "nervous", "anxiety", "anxious"]},
    {issue: "Lonely" , verseID: 8, keywords: ["Lonely", "deserted", "isolated"]},
    {issue: "when you worry about having enough of life's necessities" , verseID: 6, keywords: ["worry", "anxiety", "anxious"]},
    {issue: "Anxious for those you love" , verseID: 9, keywords: ["anxious", "apprehensive", "frightened", "nervous", "anxiety"]},
    {issue: "Sin" , verseID: 10, keywords: ["sin", "sex", "temptation"]},
    {issue: "Need forgiveness" , verseID: 11, keywords: ["forgiveness", "mercy"]},
    {issue: "ashamed" , verseID: 12, keywords: ["shame", "sad"]},
    {issue: "Feel misunderstood" , verseID: 13, keywords: ["misunderstood", "sad"]},
    {issue: "Tempted to be stingy" , verseID: 14, keywords: ["stingy", "money", "finance", "greed"]},
    {issue: "plan your budget" , verseID: 15, keywords: ["money", "budget", "finance"]},
    {issue: "are embarking on a new journey" , verseID: 16, keywords: ["home", "family", "leave", "direction", "help"]},
    {issue: "are tired" , verseID: 17, keywords: ["fatigued", "sick", "tired", "bored", "boredom"]},
    {issue: "friends betray you" , verseID: 18, keywords: ["backstabber", "friendship", "hurt"]},
    {issue: "lose a loved one" , verseID: 19, keywords: ["death", "loss", "breakup", "love", "family"]},
    {issue: "are afraid of death" , verseID: 20, keywords: ["trouble", "death"]},
    {issue: "want to take revenge" , verseID: 21, keywords: ["revenge", "trouble", "forgiveness"]},
    {issue: "God seems out of reach" , verseID: 22, keywords: ["trouble"]},
    {issue: "have let God down" , verseID: 23, keywords: ["failed", "backslide", "sin"]},
    {issue: "feel abandoned" , verseID: 24, keywords: ["abandoned", "deserted", "isolated", "lonely"]},
    {issue: "need God's help" , verseID: 25, keywords: ["help", "rescue", "trouble"]},
    {issue: "your past haunts you" , verseID: 26, keywords: ["past", "direction"]},
    {issue: "are in need of clarity" , verseID: 27, keywords: ["confused"]},
    {issue: "think you are the only one being tempted" , verseID: 28, keywords: ["temptation"]},
    {issue: "need to know how to stay on the right path" , verseID: 29, keywords: ["direction"]},
    {issue: "temptation seems overwhelming" , verseID: 30, keywords: ["temptation"]},
    {issue: "the devil taunts you" , verseID: 31, keywords: ["temptation"]},
    {issue: "you are sick" , verseID: 32, keywords: ["sick", "health", "healing"]},
    {issue: "feel weak" , verseID: 33, keywords: ["tired", "give up", "weak"]},
    {issue: "experience trouble" , verseID: 34, keywords: ["storms", "trouble"]},
    {issue: "have backslid" , verseID: 35, keywords: ["have left God", "backslide"]},
    {issue: "nothing seems to be going right" , verseID: 5, keywords: ["stress", "unlucky", "frustrated", "frustration", "anger", "nothing seems to be going right"]},
    {issue: "feeling bitter" , verseID: 36, keywords: ["bitter"]},
    {issue: "someone has wronged you" , verseID: 37, keywords: ["hurt", "abused", "revenge"]},
    {issue: "anxious" , verseID: 38, keywords: ["anxious", "apprehensive", "frightened", "nervous", "anxiety"]},
    {issue: "need guidance" , verseID: 39, keywords: ["guidance"]},
    {issue: "feel sorry for yourself" , verseID: 40, keywords: ["sad", "pity"]},
    {issue: "jealous of others' success" , verseID: 41, keywords: ["jealous", "envy", "envious"]},
    {issue: "you doubt God wants to hear from you" , verseID: 42, keywords: ["doubt"]},
    {issue: "don't know how to pray" , verseID: 43, keywords: ["prayer"]},
    {issue: "feel like giving up" , verseID: 44, keywords: ["give up", "tired"]},
    {issue: "your faith seems insufficient" , verseID: 45, keywords: ["faith"]},
    {issue: "fear failure" , verseID: 46, keywords: ["fear", "failure", "fail", "help"]},
    {issue: "worn out" , verseID: 47, keywords: ["worn out", "tired"]},
    {issue: "hopes are dashed" , verseID: 48, keywords: ["hopeless", "hope"]},
    {issue: "going through trials" , verseID: 49, keywords: ["trouble", "trials", "storms"]},
    {issue: "doubt your worth" , verseID: 50, keywords: ["doubt", "worth", "esteem"]},
    {issue: "the scriptures seem dull" , verseID: 51, keywords: ["bible"]},
    {issue: "people misread your intentions" , verseID: 52, keywords: ["misunderstood", "sad", "friends", "family"]},
    {issue: "prideful" , verseID: 53, keywords: ["pride"]},
    {issue: "you doubt God is able" , verseID: 54, keywords: ["doubt"]},
    {issue: "angry" , verseID: 55, keywords: ["anger", "angry"]},
    {issue: "you see evil people prosper" , verseID: 56, keywords: ["evil", "justice"]},
    {issue: "tempted to look out only for yourself only" , verseID: 57, keywords: ["greed", "selfish", "temptation"]},
    {issue: "feel burdened" , verseID: 58, keywords: ["burden", "heavy"]},
    {issue: "need direction" , verseID: 59, keywords: ["direction"]},
    {issue: "when you worry" , verseID: 60, keywords: ["worry", "anxious"]},
    {issue: "selfishness gets you in its grip" , verseID: 61, keywords: ["selfish", "greed"]},
    {issue: "you suffer for doing right" , verseID: 62, keywords: ["suffer"]},
    {issue: "doubt God's love for you" , verseID: 63, keywords: ["doubt", "love"]},
    {issue: "feel God owes you mercy" , verseID: 64, keywords: ["mercy"]},
    {issue: "evil in the world seems overwhelming" , verseID: 65, keywords: ["evil", "overwhelming", "justice"]},
    {issue: "you seek justice/revenge" , verseID: 66, keywords: ["evil", "justice", "revenge"]},
    {issue: "don't feel at peace with God" , verseID: 67, keywords: ["restless", "sad"]},
    {issue: "someone hurt you" , verseID: 68, keywords: ["harm", "danger", "trouble", "forgiveness", "offended"]},
    {issue: "God seems to delay" , verseID: 69, keywords: ["delay"]},
    {issue: "seek wisdom" , verseID: 70, keywords: ["wisdom", "help"]},
    {issue: "tempted to look down on others" , verseID: 71, keywords: ["snob", "pride", "sin", "temptation"]},
    {issue: "having troubles with your wife" , verseID: 72, keywords: ["wife", "marriage", "love", "family"]},
    {issue: "having troubles with your husband" , verseID: 73, keywords: ["marriage", "husband", "love", "family", "trouble" ]},
    {issue: "tempted to commit sexual sin" , verseID: 74, keywords: ["sexual", "temptation", "sex", "sin"]},
    {issue: "Feel forgotten by God" , verseID: 75, keywords: ["noticed", "forgotten", "trouble", "tired"]},
    {issue: "Need assurance of God's purpose for you" , verseID: 76, keywords: ["assurance", "direction"]},
    {issue: "Feel unloved" , verseID: 77, keywords: ["love", "God"]},
    {issue: "Marriage" , verseID: 78, keywords: ["love", "marriage", "spouse", "wife", "husband"]}
  ];

  verseData: Array<Issue> = [

    {verseID: 0, verses: ["Psalm 42:5", "Philippians 4:4"]},
    {verseID: 1, verses: ["James 4:7", "Matthew 4:1-11"]},
    {verseID: 2, verses: ["Acts 27:13-26", "Isaiah 43:2"]},
    {verseID: 3, verses: ["Joshua 1:9", "2 Corinthians 1:3-11", "Philippians 4:6-7", "Jeremiah 17:7-8"]},
    {verseID: 4, verses: ["Psalm 103"]},
    {verseID: 5, verses: ["Psalm 37:1-4"]},
    {verseID: 6, verses: ["Psalm 37:25-26", "Luke 12:22", "Matthew 6:25-34", "Philippians 4:19"]},
    {verseID: 7, verses: ["Psalm 27", "Joshua 1:9"]},
    {verseID: 8, verses: ["Psalm 13"]},
    {verseID: 9, verses: ["Psalm 107"]},
    {verseID: 10, verses: ["1 John 1:9"]},
    {verseID: 11, verses: ["Psalm 51", "1 John 1:9", "2 Chronicles 7:14", "Isaiah 1:18", "Psalm 51:10-12"]},
    {verseID: 12, verses: ["Proverbs 28:13", "2 Corinthians 5:17)"]},
    {verseID: 13, verses: ["Hebrews 4:14-16"]},
    {verseID: 14, verses: ["Proverbs 11:25"]},
    {verseID: 15, verses: ["2 Corinthians 9:6-9"]},
    {verseID: 16, verses: ["Psalm 121", "Joshua 1:9"]},
    {verseID: 17, verses: ["Psalm 127:1-2", "Isaiah 40:31", "Isaiah 41:10"]},
    {verseID: 18, verses: ["Psalm 55"]},
    {verseID: 19, verses: ["1 Thessalonians 4:13-18", "Revelations 21:4"]},
    {verseID: 20, verses: ["Psalm 23", "Isaiah 54:17"]},
    {verseID: 21, verses: ["Romans 12:19", "Psalm 51:10-12"]},
    {verseID: 22, verses: ["Psalm 139"]},
    {verseID: 23, verses: ["2 Timothy 2:13", "Isaiah 54:10", "Psalm 51:10-12"]},
    {verseID: 24, verses: ["Hebrews 13:5"]},
    {verseID: 25, verses: ["Psalm 46", "Psalm 121:1-7", "2 Corinthians 4:8-9", "Isaiah 41:10"]},
    {verseID: 26, verses: ["Colossians 1:21-22", "2 Corinthians 3:17", " Psalm 51:1-2", "Psalm 51:10-12", "2 Corinthians 5:17"]},
    {verseID: 27, verses: ["Philippians 23"]},
    {verseID: 28, verses: ["1 Corinthians 10:13"]},
    {verseID: 29, verses: ["Psalm 119:9-11"]},
    {verseID: 30, verses: ["Ephesians 6:10-18", "1 Corinthians 10:13"]},
    {verseID: 31, verses: ["James 4:7", "Romans 8:37-39"]},
    {verseID: 32, verses: ["James 5:14", "Exodus 15:26", "Exodus 23:25", " Isaiah 41:10", "Isaiah 53:4-5", "Jeremiah 30:17"]},
    {verseID: 33, verses: ["2 Corinthians 12:9"]},
    {verseID: 34, verses: ["2 Corinthians 1:3-11"]},
    {verseID: 35, verses: ["Luke 15:11-32"]},
    {verseID: 36, verses: ["Hebrews 12:15"]},
    {verseID: 37, verses: ["Colossians 3:13", "Ephesians 4:31-32"]},
    {verseID: 38, verses: ["1 Peter 5:7", "1 John 4:18", "2 Timothy 1:7", "John 14:1", "Joshua 1:9", "Proverbs 3:5-6"]},
    {verseID: 39, verses: ["Proverbs 3:5-6"]},
    {verseID: 40, verses: ["Philippians 4:4", "Psalm 102" ]},
    {verseID: 41, verses: ["Proverbs 14:30"]},
    {verseID: 42, verses: ["Luke 18:1-8"]},
    {verseID: 43, verses: ["Luke 11:1-4"]},
    {verseID: 44, verses: ["Luke 11:5-13"]},
    {verseID: 45, verses: ["Mark 9:14-24"]},
    {verseID: 46, verses: ["Psalm 37:23-24", "Isaiah 41:10"]},
    {verseID: 47, verses: ["Ephesians 1:19-20", "Nehemiah 8:10", "2 Corinthians 12:9-10"]},
    {verseID: 48, verses: ["Psalm 34:18"]},
    {verseID: 49, verses: ["James 1:2-4", "1 Corinthians 10:13"]},
    {verseID: 50, verses: ["Psalm 139:13-18"]},
    {verseID: 51, verses: ["1 Thessalonians 2:13"]},
    {verseID: 52, verses: ["Matthew 5:11-12"]},
    {verseID: 53, verses: ["Romans 12:3"]},
    {verseID: 54, verses: ["Ephesians 3:20", "Jeremiah 17:7-8", "Jeremiah 29:11"]},
    {verseID: 55, verses: ["Ephesians 4:26-27"]},
    {verseID: 56, verses: ["Psalm 37:1-3"]},
    {verseID: 57, verses: ["Luke 12:13-21"]},
    {verseID: 58, verses: ["Matthew 11:28-30"]},
    {verseID: 59, verses: ["Psalm 25:9", "Psalm 138:7-8"]},
    {verseID: 60, verses: ["Matthew 6:34", "Psalm 55:22"]},
    {verseID: 61, verses: ["Matthew 16:25"]},
    {verseID: 62, verses: ["1 Peter 1:6-7", "1 Peter 3:14", "1 Peter 3:13-18"]},
    {verseID: 63, verses: ["John 3:16", "Isaiah 54:10"]},
    {verseID: 64, verses: ["Romans 2:4"]},
    {verseID: 65, verses: ["Romans 8:28"]},
    {verseID: 66, verses: ["Revelation 19:6", "Mark 11:25", "Colossians 3:13"]},
    {verseID: 67, verses: ["Romans 5:1-5", "Psalm 23:1-6"]},
    {verseID: 68, verses: ["Matthew 6:14-15"]},
    {verseID: 69, verses: ["John 11:1-44"]},
    {verseID: 70, verses: ["James 1:5-8"]},
    {verseID: 71, verses: ["Matthew 7"]},
    {verseID: 72, verses: ["Ephesians 5:25-30", "1 Peter 3:7"]},
    {verseID: 73, verses: ["Ephesians 5:22-24", "1 Peter 3:3-6"]},
    {verseID: 74, verses: ["1 Corinthians 6:18-20"]},
    {verseID: 75, verses: ["Luke 24:13-35"]},
    {verseID: 76, verses: ["Psalm 138:7-8"]},
    {verseID: 77, verses: ["John 15:13", "Psalm 86:15", "1 John 3:1", "Galatians 2:20", "Jeremiah 31:3", "John 3:16", "Romans 8:37-39"]},
    {verseID: 78, verses: ["Genesis 1:27-28", "Proverbs 30:18-19", "Malachi 2:14-15", "Isaiah 54:5", "Solomon 8:6-7", "Ephesians 4:2-3", "Colossians 3:14", "Ecclesiastes 4:9", "Ephesians 5:25", "Genesis 2:24", "Ecclesiastes 4:12", "Mark 10:9", "Ephesians 5:25-33"]}

  ];

  constructor() { }

  getAllIssueData(): Array <Issue> {

    return this.issueData;
  }

  getVerseTable(): Array <Issue> {
    return this.verseData;
  }

  // take verseid and return associated verse
  // returns null if verse not found
  fetchVerse(verseID: number): any  {
    let verse: any = null;

    for (let i  = 0 ; i < this.verseData.length; i++) {
        // leave as ==
        if (this.verseData[i.toString()].verseID == verseID) {
        verse = this.verseData[i.toString()];
      }
    }

    return verse;

  }

  fetchIssueData(verseID: number): any  {
    let issueData: any = null;

    for (let i  = 0 ; i < this.issueData.length; i++) {
        // leave as ==
      if (this.issueData[i.toString()].verseID == verseID) {
        issueData = this.issueData[i.toString()];
      }
    }

    return issueData;
  }

}
