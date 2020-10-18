import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  visible = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.visible = !this.visible;
  }
}
