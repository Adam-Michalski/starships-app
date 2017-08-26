import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent<T>{

  @Input() public filterText = '';
  @Output() public filterTextChange = new EventEmitter<string>();
  @Input() public suggestions: Array<any>;
  @Input() public errorMessage;
  constructor(private http: HttpClient) { }

  public onFilterTextChange(filterText) {
    this.filterText = filterText;
    this.filterTextChange.emit(this.filterText);
  }

}
