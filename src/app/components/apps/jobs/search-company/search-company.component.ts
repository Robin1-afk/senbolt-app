import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-search-company',
  standalone: true,
  imports: [SharedModule,SpkNgSelectComponent,SpkDropdownsComponent],
  templateUrl: './search-company.component.html',
  styleUrl: './search-company.component.scss'
})
export class SearchCompanyComponent {
  Categories=[
    {label:"All Categories",value:1},
    {label:"Software Developer",value:2},
    {label:"Web Developer",value:3},
    {label:"Software Architect",value:4},
    {label:"IT Hardware",value:5},
    {label:"Network Engineer",value:6},
    {label:"Angular Developer",value:7},
    {label:"React Developer",value:8}
   ]


   companies = [
    {
      name: "TechGurus Ltd.",
      logo: "./assets/images/company-logos/1.png",
      location: "Los Angeles, CA",
      year: 2015,
      ratings: 4.5,
      numberOfEmployees: 345,
      vacancies: 50,
      ratingCount: 245,
      verified: true
    },
    {
      name: "XYZ Solutions Ltd.",
      logo: "./assets/images/company-logos/2.png",
      location: "New York, NY",
      year: 2010,
      ratings: 4.5,
      numberOfEmployees: 200,
      ratingCount: 318,
      vacancies: 30,
      verified: true
    },
    {
      name: 'Innovate Labs Inc.',
      logo: './assets/images/company-logos/3.png',
      location: ' San Francisco, CA,',
      year: 2013,
      rating: 4.5,
      ratingCount: 276,
      numberOfEmployees: 120,
      vacancies: 10,
      profileLink: 'javascript:void(0);',
      verified: true
    },
    {
      name: 'GlobalTech Innovations    ',
      logo: './assets/images/company-logos/7.png',
      location: ' London, UK,',
      year: 2017,
      rating: 4.0,
      ratingCount: 150,
      numberOfEmployees: 80,
      vacancies: 5,
      verified: true,
      profileLink: 'javascript:void(0);'
    },
    {
      name: 'Innovision Software Solutions',
      logo: './assets/images/company-logos/5.png',
      location: 'Sydney, Australia',
      year: 2005,
      rating: 4.5,
      ratingCount: 276,
      numberOfEmployees: 120,
      vacancies: 10,
      verified: true,
      profileLink: 'javascript:void(0);'
    },
    {
      name: 'Digital Nexus',
      logo: './assets/images/company-logos/6.png',
      location: 'Chicago, IL',
      year: 2012,
      rating: 4.0,
      ratingCount: 150,
      numberOfEmployees: 80,
      vacancies: 5,
      verified: true,
      profileLink: 'javascript:void(0);'
    },
    {
      name: 'TechFlow Innovations',
      logo: './assets/images/company-logos/7.png',
      location: 'San Francisco, CA',
      year: 2010,
      rating: 4.2,
      ratingCount: 320,
      numberOfEmployees: 150,
      vacancies: 20,
      verified: true,
      profileLink: 'javascript:void(0);'
    },
    {
      name: 'CyberEdge Technologies',
      logo: './assets/images/company-logos/8.png',
      location: 'London, UK',
      year: 2018,
      rating: 4.8,
      ratingCount: 450,
      numberOfEmployees: 200,
      vacancies: 15,
      verified: true,
      profileLink: 'javascript:void(0);'
    }
  ];

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0); // Creates array based on rating value
  }

}