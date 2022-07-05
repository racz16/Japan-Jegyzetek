import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

export interface Sentence {
  japanese: string;
  hungarian: string;
  english: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent implements OnInit {
  sentences = new Array<Sentence>(
    {
      japanese: 'にほんごを　べんきょう　しましょう。',
      english: "Let's study Japanese.",
      hungarian: 'Tanuljunk japánul!',
    },
    {
      japanese: 'まりこさんは　みせの　なかに　います。',
      english: 'Mariko is inside of the store.',
      hungarian: 'Mariko a boltban van.',
    }
  );
  japaneseVoices: Array<SpeechSynthesisVoice> = [];
  englishVoices: Array<SpeechSynthesisVoice> = [];
  hungarianVoices: Array<SpeechSynthesisVoice> = [];
  selectedJapaneseVoice = 0;
  selectedEnglishVoice = 0;
  selectedHungarianVoice = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    speechSynthesis.getVoices();
    setTimeout(() => {
      this.japaneseVoices = speechSynthesis
        .getVoices()
        .filter((v) => v.lang === 'ja-JP');
      console.log(this.japaneseVoices);
      this.englishVoices = speechSynthesis
        .getVoices()
        .filter((v) => v.lang.startsWith('en-'));
      console.log(this.englishVoices);
      this.hungarianVoices = speechSynthesis
        .getVoices()
        .filter((v) => v.lang === 'hu-HU');
      console.log(this.hungarianVoices);
      this.cd.detectChanges();
    }, 0);
  }

  speak(text: string, lang: string): void {
    const utterance = new SpeechSynthesisUtterance(text);
    if (lang === 'ja-JP' && this.japaneseVoices.length) {
      utterance.voice = this.japaneseVoices[this.selectedJapaneseVoice];
    } else if (lang.startsWith('en-') && this.englishVoices.length) {
      utterance.voice = this.englishVoices[this.selectedEnglishVoice];
    } else if (lang === 'hu-HU' && this.hungarianVoices.length) {
      utterance.voice = this.hungarianVoices[this.selectedHungarianVoice];
    } else {
      utterance.lang = lang;
    }
    speechSynthesis.speak(utterance);
  }
}

