import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sw-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent {

  @Input() public starship: any;
}
