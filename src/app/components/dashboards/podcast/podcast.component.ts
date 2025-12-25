import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkPodcastCardComponent } from '../../../../@spk/reusable-dashboard/spk-podcast-card/spk-podcast-card.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [SharedModule,SpkPodcastCardComponent,SpkDropdownsComponent,SpkReusableTablesComponent],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.scss'
})
export class PodcastComponent {
  playedColumns=[
    { header: 'Podcast Name', field: 'podcast' },
    { header: 'duration', field: 'duration' },
    { header: 'Category', field: 'Category' },
    { header: 'Latest Episode', field: 'latestepisode' },
    { header: 'Average Duration', field: 'Average Duration' },
    { header: 'Favourites', field: 'favourites' },
    { header: 'Action', field: 'Action' },
  ]
  recentslist=[
    {
      src:"./assets/images/podcast/6.jpg",
      podcast:"Whimsical Wonders",
      name:"Emily Watson",
      duration:"150s",
      type:"Comedy",
      episode:"#156: Silly Stories",
      avgduration:"45 mins",
      bg:"danger",
      bg1:"secondary",
      status:"Added"
    },
    {
      src:"./assets/images/podcast/7.jpg",
      podcast:"Mindful Meditations",
      name:"Sarah Johnson",
      duration:"1 min",
      type:"Culture",
      episode:"#82: Deep Nonsense",
      avgduration:"30 mins",
      bg:"textmuted opacity-[0.2] dark:text-textmuted/50 me-2 ",
      bg1:"success",
      status:"Add Now"
    },
    {
      src:"./assets/images/podcast/8.jpg",
      podcast:"Deep Dive Dialogues",
      name:"John Doe",
      duration:"2 min",
      type:"Personal Journal",
      episode:"#30: Life's Random Moments",
      avgduration:"60 mins",
      bg:"danger",
      bg1:"info",
      status:"Added"
    },
    {
      src:"./assets/images/podcast/9.jpg",
      podcast:"Random Revelations",
      name:"Sophia Brown",
      duration:"2 min",
      type:"News and Politics",
      episode:"#300: Current Affairs",
      avgduration:"20 mins",
      bg:"textmuted opacity-[0.2] dark:text-textmuted/50 me-2 ",
      bg1:"warning",
      status:"Add Now"
    },
    {
      src:"./assets/images/media/media-60.jpg",
      podcast:"Bite-sized Banter",
      name:"Michael Smith",
      duration:"4 min",
      type:"Food and Drink",
      episode:"#45: Culinary Capers",
      avgduration:"50 mins",
      bg:"danger",
      bg1:"primary",
      status:"Added"
    }
  ]
  contacts = [
    { iconClass: 'ri-macbook-line', category: 'Technology', count: 250, bgClass: 'primary' },
    { iconClass: 'ri-briefcase-2-line', category: 'Business', count: 236, bgClass: 'primarytint1color' },
    { iconClass: 'ri-heart-pulse-line', category: 'Health', count: 236, bgClass: 'primarytint2color' },
    { iconClass: 'ri-football-line', category: 'Sports', count: 236, bgClass: 'primarytint3color' },
    { iconClass: 'ri-flask-line', category: 'Science', count: 236, bgClass: 'secondary' },
    { iconClass: 'ri-book-line', category: 'Education', count: 236, bgClass: 'warning' },
    { iconClass: 'ri-disc-line', category: 'Music', count: 236, bgClass: 'info' },
    { iconClass: 'ri-tv-line', category: 'Entertainment', count: 236, bgClass: 'danger' }
  ];

  podcasts = [
    {
      title: 'Foodie Adventures',
      host: 'Chef Mia Johnson',
      image: './assets/images/podcast/6.jpg',
      listeners: '75.3k'
    },
    {
      title: 'Environmental Insights',
      host: 'Dr. David Green',
      image: './assets/images/podcast/7.jpg',
      listeners: '75.3k'
    },
    {
      title: 'Travel Tales',
      host: 'Wanderlost Explorers',
      image: './assets/images/podcast/7.jpg',
      listeners: '75.3k'
    },
    {
      title: 'True Crime Files',
      host: 'Detective John Smith',
      image: './assets/images/podcast/9.jpg',
      listeners: '75.3k'
    },
    {
      title: 'Science Explained',
      host: 'Dr. Michael Lee',
      image: './assets/images/podcast/8.jpg',
      listeners: '75.3k'
    },
    {
      title: 'Business Buzz',
      host: 'Emily Davis',
      image: './assets/images/podcast/8.jpg',
      listeners: '75.3k'
    }
  ];
}
