import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  @Input() clicked: boolean;
  @Output() visibleEvent = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.visibleEvent.emit();
  }
}
