import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate } from '@angular/animations';
import { open as openStyle, closed as closedStyle } from './animations-styles';

@Component({
  selector: 'app-animation-test',
  templateUrl: './animation-test.component.html',
  styleUrls: ['./animation-test.component.css'],
  animations: [
    trigger('open-close', [
      // transition('opened=>closed', animate('0.5s') ),
      // transition('closed=>opened', animate('1s')),
      // transition('*=>closed', animate('0.5s') ),
      // transition('*=>opened', animate('1s')),
      transition('opened<=>closed', animate('0.3s')),
      state('opened', openStyle),
      state('closed', closedStyle),
    ]),
  ],
})
export default class AnimationTestComponent implements OnInit {
  public open: boolean;
  constructor() {
    this.open = false;
  }

  toogle = () => {
    this.open = !this.open;
  };

  ngOnInit(): void {}
}
