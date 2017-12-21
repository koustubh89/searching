import { Component, OnInit, style, ViewEncapsulation } from '@angular/core';
import { LookupService } from '../lookup.service';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchString: any;
  results: any;
  count = 0;
  currentTime = new Date();
  showIcon = true;
  exceededAttemptsMessage = undefined;
  selectedPlanet: any;

  constructor(private lookupService: LookupService, private authService: AuthService) { }

  ngOnInit() {
    setInterval(() => { this.count = 0; }, 60000);
  }

  search(event) {
    const specificUserCase = this.authService.isSpecificUser();
    if (!specificUserCase) {
      this.count++;
    }
    if (this.count <= 16) {
      this.showIcon = false;
      this.lookupService.getResults().subscribe(data => {
        this.results = data.results;
        this.showIcon = true;
        this.exceededAttemptsMessage = undefined;
      });
    } else {
      console.log('exceeded no of attempts');
      this.results = undefined;
      this.exceededAttemptsMessage = '* You have exceeded your search attempts';
    }
  }

  getFontStyle(population: string) {
    const styleClass = {
      'font-size': undefined
    };
    const populationNow = parseInt(population, 10);
    if (populationNow === parseInt(population, 10)) {
      if (populationNow < 10000000) {
        styleClass['font-size'] = '10px';
      } else if (populationNow >= 10000000 && populationNow < 100000000 ) {
        styleClass['font-size'] = '12px';
      } else if (populationNow >= 100000000 && populationNow < 1000000000 ) {
        styleClass['font-size'] = '14px';
      } else if (populationNow >= 1000000000 && populationNow < 10000000000 ) {
        styleClass['font-size'] = '16px';
      } else if (populationNow >= 10000000000 && populationNow < 100000000000 ) {
        styleClass['font-size'] = '18px';
      } else if (populationNow >= 100000000000 && populationNow < 1000000000000 ) {
        styleClass['font-size'] = '20px';
      } else if (populationNow >= 1000000000000 && populationNow < 10000000000000 ) {
        styleClass['font-size'] = '22px';
      } else if (populationNow >= 10000000000000 && populationNow < 100000000000000 ) {
        styleClass['font-size'] = '24px';
      } else if (populationNow >= 100000000000000 && populationNow < 1000000000000000 ) {
        styleClass['font-size'] = '26px';
      }
    } else {
      styleClass['color'] = 'red';
    }
    return styleClass;
  }

  selected(selection: any) {
    this.selectedPlanet = selection.name;
  }
}
