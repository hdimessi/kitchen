import { FeedBackService } from './feed-back.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
        zIndex: 200
      })),
      state('closed', style({
        opacity: 0,
        zIndex: -1
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ]
})
export class FeedBackComponent implements OnInit, OnDestroy {

  outputStyle = 'mr-auto success';
  errorText = 'error text';
  private subscription: Subscription;
  isOpen = false;
  timer: NodeJS.Timer;

  constructor(private feedBackService: FeedBackService) { }

  ngOnInit() {
    this.subscription = this.feedBackService.newFeedBack.subscribe(
      (feedBack: {text: string, style: boolean}) => {
        clearTimeout(this.timer);
        this.isOpen = true;
        this.errorText = feedBack.text;
        this.outputStyle = feedBack.style ? 'mr-auto success' : 'mr-auto error';
        this.timer = setTimeout( () => {
          this.isOpen = false;
        }, 5000 );
      }
    );
  }

  dismiss() {
    this.isOpen = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
