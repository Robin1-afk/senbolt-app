import { Component } from '@angular/core';
import { GalleryItem, Gallery, ImageItem, ImageSize, ThumbnailsPosition, GalleryModule } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkGalleryComponent } from '../../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery.component';
import { SharedModule } from '../../../shared/shared.module';
import { SpkProfileCardComponent } from '../../../../@spk/spk-reusable-pages/spk-profile-card/spk-profile-card.component';
const data = [
  {
    srcUrl: './assets/images/media/media-40.jpg',
    previewUrl: './assets/images/media/media-40.jpg',
  },
  {
    srcUrl: './assets/images/media/media-41.jpg',
    previewUrl: './assets/images/media/media-41.jpg',
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
  },
  {
    srcUrl: './assets/images/media/media-43.jpg',
    previewUrl: './assets/images/media/media-43.jpg',
  },
  {
    srcUrl: './assets/images/media/media-44.jpg',
    previewUrl: './assets/images/media/media-44.jpg',
  },
  {
    srcUrl: './assets/images/media/media-45.jpg',
    previewUrl: './assets/images/media/media-45.jpg',
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
  },
  {
    srcUrl: './assets/images/media/media-60.jpg',
    previewUrl: './assets/images/media/media-60.jpg',
  },
  {
    srcUrl: './assets/images/media/media-26.jpg',
    previewUrl: './assets/images/media/media-26.jpg',
  },
  {
    srcUrl: './assets/images/media/media-32.jpg',
    previewUrl: './assets/images/media/media-32.jpg',
  },
  {
    srcUrl: './assets/images/media/media-30.jpg',
    previewUrl: './assets/images/media/media-30.jpg',
  },
  {
    srcUrl: './assets/images/media/media-31.jpg',
    previewUrl: './assets/images/media/media-31.jpg',
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
  },
  {
    srcUrl: './assets/images/media/media-59.jpg',
    previewUrl: './assets/images/media/media-59.jpg',
  },
  {
    srcUrl: './assets/images/media/media-61.jpg',
    previewUrl: './assets/images/media/media-61.jpg',
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
  },
];
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule,NgSelectModule,SpkNgSelectComponent,SpkGalleryComponent,SpkProfileCardComponent,
    GalleryModule,LightboxModule, OverlayscrollbarsModule,SpkNgSelectComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {

  Skills=[
    {label:"Management",value:1},
    {label:"Data Analysis",value:2},
    {label:"Marketing Strategy",value:3},
    {label:"Graphic Design",value:4},
    {label:"Content Creation",value:5},
    {label:"Market Research",value:6},
    {label:"Client Relations",value:7},
    {label:"Event Planning",value:8},
    {label:"Budgeting",value:9},
    {label:"Negotiation Skills",value:10},
    {label:"Team Work",value:11},
    {label:"Adaptability",value:12},

  ]
  selectedSkill=[1,2,3,4,5,6,7,8,9,10,11,12]
  imageData = data;
  items!: GalleryItem[];
  constructor(public gallery: Gallery, public lightbox: Lightbox) {}
  ngOnInit() {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
  profiles = [
    {
      name: 'Della Jasmine',
      email: 'dellajasmine117@gmail.com',
      role: 'Product Designer',
      avatar: './assets/images/faces/2.jpg',
      badgeClass: 'info'
    },
    {
      name: 'Danny Raj',
      email: 'dannyraj658@gmail.com',
      role: 'UI Designer',
      avatar: './assets/images/faces/15.jpg',
      badgeClass: 'success'
    },
    {
      name: 'Catalina Keira',
      email: 'catalinakeira023@gmail.com',
      role: 'Product Designer',
      avatar: './assets/images/faces/5.jpg',
      badgeClass: 'info'
    },
    {
      name: 'Priceton Gray',
      email: 'pricetongray451@gmail.com',
      role: 'Team Manager',
      avatar: './assets/images/faces/11.jpg',
      badgeClass: 'warning'
    },
    {
      name: 'Sarah Ruth',
      email: 'sarahruth45@gmail.com',
      role: 'Product Designer',
      avatar: './assets/images/faces/7.jpg',
      badgeClass: 'info'
    },
    {
      name: 'Mahira Hose',
      email: 'mahirahose9456@gmail.com',
      role: 'Product Designer',
      avatar: './assets/images/faces/12.jpg',
      badgeClass: 'info'
    },
    {
      name: 'Victoria Gracie',
      email: 'victoriagracie@gmail.com',
      role: 'Product Designer',
      avatar: './assets/images/faces/1.jpg',
      badgeClass: 'info'
    },
    {
      name: 'Amith Gray',
      email: 'amithgray132@gmail.com',
      role: 'Product Designer',
      avatar: './assets/images/faces/13.jpg',
      badgeClass: 'info'
    },
    {
      name: 'Isha Bella',
      email: 'ishabella255@gmail.com',
      role: 'Product Designer',
      avatar: './assets/images/faces/6.jpg',
      badgeClass: 'info'
    }
  ];
  selectedSkills=[1,2,3,4,5,6,7,8,9,10,11,12]
  selectedSkills1 = [
    {value:1,label:'Project Management'},
    {value:2,label:'Data Analysis'},
    {value:3,label:'Marketing Strategy'},
    {value:4,label:'Graphic Design'},
    {value:5,label:'Content Creation'},
    {value:6,label:'Market Research'},
    {value:7,label:'Client Relations'},
    {value:8,label:'Event Planning'},
    {value:9,label:'Budgeting and Finance'},
    {value:10,label:'Negotiation Skills'},
    {value:11,label:'Team Collaboration'},
    {value:12,label:'Adaptability'}];
}
