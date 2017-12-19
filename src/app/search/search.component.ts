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

  constructor(private lookupService: LookupService, private authService: AuthService) { }

  ngOnInit() {
    setInterval(() => { this.count = 0; }, 60000);
  }

  search(event) {
    const specificUserCase = this.authService.isSpecificUser();
    if (specificUserCase) {
      this.count++;
    }
    if (this.count <= 16) {
      this.showIcon = false;
      this.lookupService.getResults().subscribe(data => {
        this.results = data.results;
        this.showIcon = true;
      });
    } else {
      console.log('exceeded no of attempts');
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
