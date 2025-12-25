import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module'; 
import * as noUiSlider from 'nouislider';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkJobsearchCardComponent } from '../../../../../@spk/reusable-apps/spk-jobsearch-card/spk-jobsearch-card.component';


@Component({
  selector: 'app-search-jobs',
  standalone: true,
  imports: [SharedModule,FormsModule,ReactiveFormsModule,CommonModule,SpkDropdownsComponent,SpkJobsearchCardComponent],
  templateUrl: './search-jobs.component.html',
  styleUrl: './search-jobs.component.scss'
})
export class SearchJobsComponent {
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

  jobListings=[
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Frontend Developer',
      companyName: 'Tech Solutions Inc.',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$45,000 - $60,000',
      imgSrc: './assets/images/media/jobs/2.png',
      locationClass:"badge rounded-full text-[11px] border border-primary/10 text-primary",
      experienceClass:"border-primarytint3color/10 text-primarytint3color"
    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'React Lead Developer',
      companyName: 'Infratech PVT LTD',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      locationClass:"badge rounded-full text-[11px] border border-primary/10 text-primary",
      imgSrc: './assets/images/media/jobs/1.png',
      experienceClass:"border-primarytint3color/10 text-primarytint3color"
    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Vuejs Frontend Developer',
      companyName: 'G Technical Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/3.png',
      experienceClass:"border-primarytint3color/10 text-primarytint3color",
      locationClass:"badge rounded-full text-[11px] border border-primary/10 text-primary",

    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Wordpress Developer',
      companyName: 'Hardware Private Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      experienceClass:"border-primarytint3color/10 text-primarytint3color",
      imgSrc: './assets/images/media/jobs/4.png',
      locationClass:"badge rounded-full text-[11px] border border-primary/10 text-primary"

    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'HTML Developer - Fresher',
      companyName: 'InnovateZ Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/2.png',
      experienceClass:"border-primarytint3color/10 text-primarytint3color",
      locationClass:"badge rounded-full text-[11px] border border-primary/10 text-primary",

    },
   {
    buttonClass:"d-inline-flex",
    ngbDropdown:true,
    icons:false,
    icon:false,
    buttonIcon:true,
      jobTitle: 'React Lead Developer',
      companyName: 'Infratech PVT LTD',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/1.png',
      experienceClass:"border-primarytint3color/10 text-primarytint3color",
      locationClass:"badge rounded-full text-[11px] border border-primary/10 text-primary"

    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Vuejs Frontend Developer',
      companyName: 'G Technical Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      experienceClass:"border-primarytint3color/10 text-primarytint3color",
      imgSrc: './assets/images/media/jobs/3.png',
      locationClass:"badge rounded-full text-[11px] border border-primary/10 text-primary"

    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'HTML Developer - Remote',
      companyName: 'InnovateZ Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/2.png',
      locationClass:"badge rounded-full text-[11px] border border-primary/10 text-primary",
      experienceClass:"border-primarytint3color/10 text-primarytint3color"
    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'React Lead Developer',
      companyName: 'Infratech PVT LTD',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/1.png',
      locationClass:"badge rounded-full text-[11px] border border-primary/10 text-primary",
      experienceClass:"border-primarytint3color/10 text-primarytint3color"


    },
    {
      buttonClass:"d-inline-flex",
      ngbDropdown:true,
      icons:false,
      icon:false,
      buttonIcon:true,
      jobTitle: 'Vuejs Frontend Developer',
      companyName: 'G Technical Solutions',
      location: 'San Francisco',
      openings: 5,
      education: 'Graduate',
      experience: 'Min - 1 Year',
      jobType: 'Full-time',
      salaryRange: '$18,000 - $43,000',
      imgSrc: './assets/images/media/jobs/3.png',
      locationClass:"badge rounded-full text-[11px] border border-primary/10 text-primary",
      experienceClass:"border-primarytint3color/10 text-primarytint3color"


    },
  ]
}