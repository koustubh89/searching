import { Component, OnInit, style, ViewEncapsulation } from '@angular/core';
import { LookupService } from '../lookup.service';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
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
      console.log(this.count);
      this.lookupService.getResults().subscribe(data => {
        // let planets: any = result;
        console.log('results', data.results);
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

  getHeightStyle(population: string) {
    const styleClass = {
      'height': undefined
    };
    const populationNow = parseInt(population, 10);
    if (populationNow === parseInt(population, 10)) {
      if (populationNow < 10000000) {
        styleClass['height'] = '1.0rem';
      } else if (populationNow >= 10000000 && populationNow < 20000000 ) {
        styleClass['height'] = '1.2rem';
      } else if (populationNow >= 20000000 && populationNow < 30000000 ) {
        styleClass['height'] = '1.4rem';
      } else if (populationNow >= 30000000 && populationNow < 40000000 ) {
        styleClass['height'] = '1.6rem';
      } else if (populationNow >= 40000000 && populationNow < 50000000 ) {
        styleClass['height'] = '1.8rem';
      } else if (populationNow >= 50000000 && populationNow < 60000000 ) {
        styleClass['height'] = '2.0rem';
      }
    } else {
      styleClass['height'] = '1rem';
    }
    return styleClass;
  }
}
