import { CommonModule } from '@angular/common';
import {  Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { SharedModule } from '../../../../shared/shared.module';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
Swiper.use([Autoplay, Navigation, Pagination]);
register();

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [SharedModule,FormsModule,ReactiveFormsModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {

  thumbsSwiper: any;
  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
  ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
		  slidesPerView: 1,
		  spaceBetween: 10,
      direction:"vertical",
      mousewheel:true,
		  breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 30,
			  },
			1110: {
			  slidesPerView: 3,
			  spaceBetween: 10,
			},
			1300: {
			  slidesPerView: 3,
			  spaceBetween: 10,
			},

		  },
	  });
  }
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
 
  jobs = [
    {
      title: 'Frontend Developer',
      company: 'InnovateZ Solutions',
      location: 'San Francisco, CA',
      experience: '2+ Yrs Exp.',
      experienceClass:" bg-primarytint2color -transparent",
      salaryRange: '$50k - $80k',
      imageUrl: './assets/images/media/jobs/2.png',
      locationClass:'bg-info-transparent',
    },
    {
      title: 'Backend Developer',
      company: 'Tech Solutions Inc.',
      location: 'New York, NY',
      experience: '3+ Yrs Exp.',
      salaryRange: '$60k - $90k',
      experienceClass:" bg-primarytint2color -transparent",
      locationClass:'bg-info-transparent',
      icon:true,
      iconbg:"danger"

    },
    {
      title: 'UI/UX Designer',
      company: 'Creative Designs Co.',
      location: 'Seattle, WA',
      experience: '3+ Yrs Exp.',
      salaryRange: '$70k - $100k',
      experienceClass:" bg-primarytint2color -transparent",
      locationClass:'bg-info-transparent',
      icon:true,
      iconbg:"warning"
    },
    {
      title: 'Full Stack Developer',
      company: 'TechGurus Ltd.',
      location: 'Los Angeles, CA',
      experience: '5+ Yrs Exp.',
      salaryRange: '$80k - $120k',
      experienceClass:" bg-primarytint2color -transparent",
      locationClass:'bg-info-transparent',
      icon:true,
      iconbg:"info"

    }
  ];
}