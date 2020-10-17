import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  sections: Array<string>;

  constructor() {
  }

  ngOnInit(): void {
    this.sections = ['cover', 'about', 'projects', 'contact'];
  }

}
