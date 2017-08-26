import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() public selectedStarship: any;
  @Output() public selectedStarshipChange = new EventEmitter<any>();
  @Input() public filterText = '';
  @Output() public filterTextChange = new EventEmitter<string>();
  @Input() public suggestions: Array<any>;
  @Input() public errorMessage;

  constructor(private http: HttpClient) { }

  public onFilterTextChange(filterText) {
    this.filterText = filterText;
    this.filterTextChange.emit(this.filterText);
  }

  public onSelectedStarship(selectedStarship: any) {
    console.log('SearchComponent', selectedStarship);
    this.selectedStarship = selectedStarship;
    this.selectedStarshipChange.emit(this.selectedStarship);
  }
}
