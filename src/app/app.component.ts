import { Component } from '@angular/core';
import { StarshipService } from './app.service';

@Component({
  selector: 'sw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public filterText = '';
  public suggestions: Array<any>;
  public errorMessage;
  public selectedStarship: any;

  constructor(private starshipService: StarshipService) { }

  public onFilterTextChange(filterText) {
    this.filterText = filterText;
    this.getSuggestions();
    console.log('changes', this.filterText);
  }

  private getSuggestions() {
    this.starshipService.getStarshipSuggestions(this.filterText)
      .subscribe((response) => {
        console.log(response);
        this.suggestions = response.results;
        if (response.results.length > 0) {
          this.errorMessage = null;
        } else {
          this.errorMessage = 'No results';
        }
      }, error => {
        this.errorMessage = error;
      });
  }

  public onSelectedStarshipChange(selectedStarship: any) {
    console.log(selectedStarship)
    this.selectedStarship = selectedStarship;
  }
}
