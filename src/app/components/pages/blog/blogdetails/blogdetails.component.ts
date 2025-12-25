import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GalleryItem, Gallery, ImageItem, ImageSize, ThumbnailsPosition, GalleryModule } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { SpkGalleryComponent } from '../../../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
const data = [
  {
    srcUrl: './assets/images/media/media-48.jpg',
    previewUrl: './assets/images/media/media-48.jpg',
  },
  {
    srcUrl: './assets/images/media/media-49.jpg',
    previewUrl: './assets/images/media/media-49.jpg',
  },
  {
    srcUrl: './assets/images/media/media-50.jpg',
    previewUrl: './assets/images/media/media-50.jpg',
  },
  {
    srcUrl: './assets/images/media/media-51.jpg',
    previewUrl: './assets/images/media/media-51.jpg',
  },
  {
    srcUrl: './assets/images/media/media-52.jpg',
    previewUrl: './assets/images/media/media-52.jpg',
  },
  {
    srcUrl: './assets/images/media/media-53.jpg',
    previewUrl: './assets/images/media/media-53.jpg',
  },
  {
    srcUrl: './assets/images/media/media-54.jpg',
    previewUrl: './assets/images/media/media-54.jpg',
  },
  {
    srcUrl: './assets/images/media/media-55.jpg',
    previewUrl: './assets/images/media/media-55.jpg',
  },
  {
    srcUrl: './assets/images/media/media-56.jpg',
    previewUrl: './assets/images/media/media-56.jpg',
  },
];
@Component({
  selector: 'app-blogdetails',
  standalone: true,
  imports: [SharedModule,RouterModule,GalleryModule,LightboxModule,OverlayscrollbarsModule,SpkGalleryComponent,CommonModule],
  templateUrl: './blogdetails.component.html',
  styleUrl: './blogdetails.component.scss'
})
export class BlogdetailsComponent {
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
  categories = [
    {
      name: 'Designing',
      icon: 'ri-brush-fill',
      bgColor: 'primary', // Example background color
      textColor: '#007bff', // Example text color
      badgeColor: '#007bff',
      count: 13
    },
    {
      name: 'Modern',
      icon: 'ri-pencil-fill',
      bgColor: 'primarytint1color',
      textColor: '#ffc107',
      badgeColor: '#ffc107',
      count: 36
    },
    {
      name: 'Science',
      icon: 'ri-microscope-fill',
      bgColor: 'primarytint2color',
      textColor: '#dc3545',
      badgeColor: '#dc3545',
      count: 15
    },
    {
      name: 'Trips',
      icon: 'ri-flight-takeoff-fill',
      bgColor: 'primarytint3color',
      textColor: '#28a745',
      badgeColor: '#28a745',
      count: 17
    },
    {
      name: 'Beauty',
      icon: 'ri-magic-fill',
      bgColor: 'secondary',
      textColor: '#6c757d',
      badgeColor: '#6c757d',
      count: 66
    },
    {
      name: 'Styling',
      icon: 'ri-shirt-fill',
      bgColor: 'success',
      textColor: '#ffc107',
      badgeColor: '#ffc107',
      count: 33
    }
  ];

  blogs = [
    {
      image: './assets/images/media/blog/14.jpg',
      category: 'Nature',
      textColor: 'text-primary',
      title: 'The Wonders of Nature',
      date: '18 Jan 2024, 15:46'
    },
    {
      image: './assets/images/media/blog/15.jpg',
      category: 'Tourism',
      textColor: 'text-primarytint1color',
      title: 'Embarking on a Tourism',
      date: '20 Feb 2024, 03:03'
    },
    {
      image: './assets/images/media/blog/16.jpg',
      category: 'Technology',
      textColor: 'text-primarytint2color',
      title: 'Navigating the Digital Frontier',
      date: '05 Feb 2024, 16:23'
    },
    {
      image: './assets/images/media/blog/17.jpg',
      category: 'Networking',
      textColor: 'text-primarytint3color',
      title: 'More Designing on websites',
      date: '13 Mar 2024, 20:14'
    }
  ];
}
