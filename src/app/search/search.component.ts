import { Component, OnInit, style } from '@angular/core';
import { LookupService } from '../lookup.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchString: any;
  results: any;

  constructor(private lookupService: LookupService) { }

  ngOnInit() {
  }

  search(event) {
    this.lookupService.getResults().subscribe(data => {
      // let planets: any = result;
      console.log('results', data.results);
      this.results = data.results;
    });
  }

  getFontStyle(population: string) {
    const styleClass = {
      'font-size': undefined
    };
    const populationNow = parseInt(population, 10);
    if (populationNow === parseInt(population, 10)) {
      if (populationNow < 10000000) {
        styleClass['font-size'] = '10px';
      } else if (populationNow >= 10000000 && populationNow < 20000000 ) {
        styleClass['font-size'] = '12px';
      } else if (populationNow >= 20000000 && populationNow < 30000000 ) {
        styleClass['font-size'] = '14px';
      } else if (populationNow >= 30000000 && populationNow < 40000000 ) {
        styleClass['font-size'] = '16px';
      } else if (populationNow >= 40000000 && populationNow < 50000000 ) {
        styleClass['font-size'] = '18px';
      } else if (populationNow >= 50000000 && populationNow < 60000000 ) {
        styleClass['font-size'] = '20px';
      }
    } else {
      styleClass['color'] = 'red';
    }
    return styleClass;

  }
}
