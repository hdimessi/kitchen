import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {
  newFeedBack = new Subject<{text: string, style: boolean}>();

  constructor() { }

  displayNewFeedBack(feedBack: {text: string, style: boolean}) {
    this.newFeedBack.next(feedBack);
  }

}
