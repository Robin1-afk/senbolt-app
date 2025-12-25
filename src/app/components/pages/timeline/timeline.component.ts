import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  timeline = [
    { type: 'date', date: '22 January 2024' },
    
  {
    type: 'event',
    time: '15:36, Monday',
    title: 'You',
    tagged: 'Emma Thompson',
    description: "Including Emma in cherished memories captured on camera, tagging her in a photo to share a moment of joy or significance and inviting her to reminisce together.",
    media: ['./assets/images/media/media-17.jpg', './assets/images/media/media-18.jpg']
  },
  {
    type: 'event',
    time: '22:45, Monday',
    title: 'Michel',
    description: "Amplifying Emily's message and sharing...",
    media: []
  },
  { type: 'date', date: '25 January 2024' },
  {
    type: 'event',
    time: '09:14, Thursday',
    title: 'You',
    description: 'Spreading culinary inspiration...',
    media: ['./assets/images/media/media-59.jpg', './assets/images/media/media-60.jpg', './assets/images/media/media-61.jpg']
  },
  {
    type: 'event',
    time: '17:56, Thursday',
    title: 'You',
    description: 'Sharing your perspective...',
    media: ['./assets/images/media/media-26.jpg', './assets/images/media/media-29.jpg']
  }
]
notificationList=[
  {
    date: "Saturday",
    time: "06:15",
    avatar: "./assets/images/faces/1.jpg",
    title: "Event Conceptualization",
    description: "Brainstormed event ideas and themes. Conducted initial research on venue options and potential sponsors.",
    badgeContent: "May 21, 2024 - Ongoing",
    badgeClass: "primary",
    End: true,
    Navigate:"#!",
    isEnd: false,

},
{
    date: "Tuesday",
    time: "22:55",
    avatar: "./assets/images/faces/15.jpg",
    title: "Preparation and Organization",
    description: "Secured venue and finalized contracts with vendors.Created event marketing materials and promotional strategies.Established event logistics.",
    badgeContent: "May 21 - 26, 2024",
    badgeClass: "primary1",
    End: false,
    Start: true,
    Navigate:"#!",
    isEnd: true,
},
{
    date: "Monday",
    time: "13:05",
    avatar: "./assets/images/faces/2.jpg",
    title: "Event Execution",
    description: "Set up event space and coordinated with vendors for equipment and services. Facilitated event activities, speakers, and entertainment.",
    badgeContent: "May 20, 2024",
    badgeClass: "primarytint2color ",
    End: true,
    Navigate:"#!",
    isEnd: false,
},
{
    date: "Yesterday",
    time: "08:45",
    avatar: "./assets/images/faces/8.jpg",
    title: "Product Development",
    description: "Conducted market research and identified customer needs. Defined product specifications and features.",
    badgeContent: "May 1 - May 15, 2024",
    badgeClass: "primarytint3color ",
    End: false,
    Start: true,
    Navigate:"#!",
    isEnd: true,
},
{
    date: "Today",
    time: "12:24",
    avatar: "./assets/images/faces/13.jpg",
    title: "Team Building Retreat",
    description: "Our team took a break to recharge and bond. We came back stronger!",
    badgeContent: "February 15 - April 30, 2024",
    badgeClass: "secondary",
    End: true,
    Navigate:"#!",
    isEnd: false,
},
{
    date: "Today",
    time: "04:11",
    avatar: "./assets/images/faces/6.jpg",
    title: "Design and Development",
    description: "Designed user interface (UI) and user experience (UX) elements. Developed product functionalities.",
    badgeContent: "January 20 - February 10, 2024",
    badgeClass: "warning",
    End: false,
    Start: true,
    Navigate:"#!",
    isEnd: true,
},
{
    date: "Today",
    time: "02:52",
    avatar: "./assets/images/faces/11.jpg",
    title: "Testing and Launch",
    description: "Conducted comprehensive testing to ensure product quality and stability. Prepared marketing materials.",
    badgeContent: "January 15, 2024",
    badgeClass: "info",
    End: true,
    Navigate:"#!",
    isEnd: false,
},
]
steps= [
  {
      date: "October 6, 2024",
      title: "Planning",
      content: "Research and competitor analysis.",
      imageSrc: "./assets/images/faces/11.jpg",
      bgClass: "primary1",
      Customclass: "",
      popoverContent: "And here's some amazing content. It's very engaging. Right?",
      popoverTitle: "2003",
      isEnd:false
  },
  {
      date: "September 12, 2024",
      title: "Design",
      content: "Frontend and backend components.",
      imageSrc: "./assets/images/faces/1.jpg",
      bgClass: "primarytint2color ",
      Customclass: "content-top",
      popoverContent: "And here's some amazing content. It's very engaging. Right?",
      popoverTitle: "2004",
      isEnd:true
  },
  {
      date: "July 20, 2024",
      title: "Testing",
      content: "Conducted comprehensive testing.",
      imageSrc: "./assets/images/faces/12.jpg",
      bgClass: "primarytint3color ",
      Customclass: "",
      popoverContent: "And here's some amazing content. It's very engaging. Right?",
      popoverTitle: "2005",
      isEnd:false
  },
  {
      date: "May 18, 2024",
      title: "Deployment",
      content: "Conducted final checks.",
      imageSrc: "./assets/images/faces/3.jpg",
      bgClass: "secondary",
      Customclass: "content-top",
      popoverContent: "And here's some amazing content. It's very engaging. Right?",
      popoverTitle: "2010",
      isEnd:true
  },
  {
      date: "April 5, 2024",
      title: "Post-Launch",
      content: "Provided ongoing support.",
      imageSrc: "./assets/images/faces/14.jpg",
      bgClass: "warning",
      Customclass: "",
      popoverContent: "And here's some amazing content. It's very engaging. Right?",
      popoverTitle: "2020",
      isEnd:false
  }
];




}
