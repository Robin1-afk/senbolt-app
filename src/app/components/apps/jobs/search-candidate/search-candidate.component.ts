import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import * as noUiSlider from 'nouislider';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkSearchCandidateCardComponent } from '../../../../../@spk/reusable-apps/spk-search-candidate-card/spk-search-candidate-card.component';

@Component({
  selector: 'app-search-candidate',
  standalone: true,
  imports: [SharedModule,SpkNgSelectComponent,SpkSearchCandidateCardComponent],
  templateUrl: './search-candidate.component.html',
  styleUrl: './search-candidate.component.scss'
})
export class SearchCandidateComponent {

  lowerValue: number = 8000;
  upperValue: number = 40000;

  ngAfterViewInit(): void {
    const slider = document.getElementById('nonlinear') as noUiSlider.target; // Correct type is noUiSlider.target

    noUiSlider.create(slider, {
      start: [this.lowerValue, this.upperValue],
      connect: true,
      range: {
        'min': [0],
        'max': [50000]
      }
    });

    const lowerValueElem :any= document.getElementById('lower-value');
    const upperValueElem:any = document.getElementById('upper-value');

    slider.noUiSlider?.on('update', (values: any, handle: any) => {
      if (handle === 0) {
        this.lowerValue = Math.round(values[0] as number);
        lowerValueElem.innerHTML = this.lowerValue.toString();
      } else {
        this.upperValue = Math.round(values[1] as number);
        upperValueElem.innerHTML = this.upperValue.toString();
      }
    });
  }

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
   Qualification=[
    {label:"Fresher's",value:1},
    {label:"1 Year Exp",value:2},
    {label:"2 Year Exp",value:3},
    {label:"3 Year Exp",value:4},
    {label:"4 Year Exp",value:5},
    {label:"5 yrs Exp",value:6},
   ]
   candidates = [
    {
      name: 'Samantha',
      role: 'UI/UX Designer',
      location: 'Silicon Valley, CA',
      profilePic: './assets/images/faces/1.jpg',
      degree: "Master's Degree",
      workType: 'Remote Work',
      experience: 'UI Designer (2+ yrs)',
      jobType: 'Full Time',
      payRange: '$55,000 - $80,000',
      languages: 'English, Spanish',
      rating: 4.5,
      ratingCount: "245",
      downloadbg:"info",
      wishlistbg:"danger"
    },
    {
      name: 'Michael',
      role: 'Frontend Developer',
      location: 'New York City, NY',
      profilePic: './assets/images/faces/2.jpg',
      degree: "Bachelor's Degree",
      workType: 'Remote Work',
      experience: 'Frontend Developer (4+ yrs)',
      jobType: 'Full Time',
      payRange: '$65,000 - $90,000',
      languages: 'English, French',
      rating: 4.5,
      ratingCount: "189",
      downloadbg:"danger",
      wishlistbg:"info"
    },
    {
      
      name: 'Emily',
      role: 'Graphic Designer',
      location: 'Los Angeles, CA',
      rating: 3.5,
      degree: "Bachelor\'s Degree",
      workType: 'Remote Work',
      experience: 'Graphic Designer (3+ yrs)',
      jobType: 'Part Time',
      profilePic: './assets/images/faces/3.jpg',
      payRange: '$70,000 - $90,000',
      languages: 'English, Spanish',
      downloadbg:"info",
      wishlistbg:"danger",
      ratingCount: "201",
    },
      {
        
        degree: "Bachelor's Degree",
        workType: 'On-site Work',
        experience: 'Software Engineer (5+ yrs)',
        jobType: 'Contract',
        payRange: '$80000 - $110000',
        languages: 'English, Mandarin',
        rating: 4.5,
        ratingCount: "172",
        downloadbg:"info",
        wishlistbg:"danger",
        name: 'James',
        role: 'Software Engineer',
        location: 'Seattle, WA',
        profilePic: './assets/images/faces/4.jpg'
      },
      {
        name: 'Alexander',
        role: 'Digital Marketing Specialist', 
        location: 'Toronto, Canada',
        degree: "Bachelor's Degree",
        workType: 'On-site Work',
        experience: 'Digital Marketing (3+ yrs)',
        jobType: 'Full Time',
        payRange: '$60000 - $85000',
        languages: 'English, French',
        rating: 4.5,
        ratingCount: "156",
        downloadbg:"info",
        wishlistbg:"danger",
        profilePic: './assets/images/faces/5.jpg',
      },
      {
        
        name: 'Sophia',
        role: 'Data Analyst',
        location: 'London, UK',
        degree: "Master's Degree",
        workType: 'Remote Work',
        experience: 'Data Analyst (4+ yrs)',
        jobType: 'Part Time',
        rating: 4.5,
        profilePic: './assets/images/faces/6.jpg',
        payRange: '$70,000 - $95,000',
        languages: 'English, Spanish',
        downloadbg:"info",
        wishlistbg:"danger",
        ratingCount: "178",
      },
      {
        
        name: 'Marcus',
        role: 'Software Engineer',
        location: 'New York City, NY',
        rating: 4.0,
        degree: "Bachelor\'s Degree",
        workType: 'On-site Work',
        experience: 'Software Engineer (5+ yrs)',
        jobType: 'Full Time',
        profilePic: './assets/images/faces/7.jpg',
        payRange: '$85,000 - $110,000',
        languages: 'English',
        downloadbg:"info",
        wishlistbg:"danger",
        ratingCount: "120",
      },
      {
        
        name: 'Emily',
        role: 'Graphic Designer',
        location: 'Los Angeles, CA',
        rating: 3.5,
        degree: "Bachelor\'s Degree",
        workType: 'Remote Work',
        experience: 'Graphic Designer (3+ yrs)',
        jobType: 'Part Time',
        profilePic: './assets/images/faces/8.jpg',
        payRange: '$70,000 - $90,000',
        languages: 'English, Spanish',
        downloadbg:"info",
        wishlistbg:"danger",
        ratingCount: "90"
      },
      {
        name: 'Sophia',
        role: 'Digital Marketer',
        location: 'London, UK',
        profilePic: './assets/images/faces/9.jpg',
        degree: "Bachelor\'s Degree",
        workType: 'Remote Work',
        experience: 'Digital Marketer (4+ yrs)',
        jobType: 'Full Time',
        rating: 3.5,
        ratingCount: "180",
        payRange: '£45,000 - £65,000',
        languages: 'English , French',
        downloadbg:"info",
        wishlistbg:"danger",
      },
      {
        name: 'Lucas',
        role: 'Data Analyst',
        location: 'Toronto, Canada',
        profilePic: './assets/images/faces/10.jpg',
        degree: "Master\'s Degree",
        workType: 'On-site Work',
        experience: 'Data Analyst (3+ yrs)',
        jobType: 'Part Time',
        rating: 3.5,
        ratingCount: "110",
        payRange: 'CAD 65,000 - CAD 85,000',
        languages: 'English',
        downloadbg:"info",
        wishlistbg:"danger",
      }
  ];
}