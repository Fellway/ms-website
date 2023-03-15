import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shape-devider',
  templateUrl: './shape-devider.component.html',
  styleUrls: ['./shape-devider.component.css']
})
export class ShapeDeviderComponent implements OnInit {

  @Input() position: string;

  @Input() color: string;

  @Input() invert: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
