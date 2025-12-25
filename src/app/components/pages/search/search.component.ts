import { Component } from '@angular/core';
import { GalleryItem, Gallery, ImageItem, ImageSize, ThumbnailsPosition, GalleryModule } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { SharedModule } from '../../../shared/shared.module';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkGalleryComponent } from '../../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery.component';

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
]
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SharedModule,GalleryModule,LightboxModule,SpkDropdownsComponent,SpkGalleryComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
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

  courses = [
    {
      category: 'Beginner',
      url: 'http://www.beginnerpackage.com',
      title: 'Introduction to Web Development',
      description: 'Learn the basics of web development, including HTML, CSS, and JavaScript.',
      badges: ['Shop Now', 'Top 10 Picks']
    },
    {
      category: 'Responsive Design',
      url: 'http://www.responsivedesigns.com',
      title: 'Best Practices for Responsive Web Design',
      description: 'Explore the latest techniques and tools for creating responsive websites.',
      badges: ['Browse Recipes', 'Nutrition Tips']
    },
    {
      category: 'JavaScript Frameworks',
      url: 'http://www.javaScriptDevlops.com',
      title: 'Advanced JavaScript Frameworks',
      description: 'Dive deep into popular JavaScript frameworks like React, Angular, and Vue.js.',
      badges: ['Explore Destinations', 'Travel Guides']
    },
    {
      category: 'CSS Layouts',
      url: 'http://www.layoutscss.com',
      title: 'CSS Flexbox Tutorial:',
      description: 'Master the CSS Flexbox layout model, get Videos from the link.',
      badges: ['Explore Destinations', 'Travel Guides'],
    },
    {
      category: 'Frontend Development',
      url: 'http://www.frontenddevelopment.com',
      title: 'Debugging Tips for Frontend Developers',
      description: 'Discover effective strategies for debugging frontend code and troubleshooting common issues.',
      badges: ['Shop Now', 'Trend Alerts']
    },
    {
      category: 'Backend Development',
      url: 'http://www.backenddevlops.com',
      title: 'Introduction to Backend Development',
      description: 'Get started with backend development using Node.js, Python, and other server-side technologies.',
      badges: ['Explore Books', 'Author Interviews']
    }
  ];
  books = [
    {
      title: 'Whispers in the Wind',
      image: './assets/images/media/books/6.jpg',
      publishedOn: 'May 10, 1902',
      description: 'Set in the Scottish Highlands, this tale follows the forbidden love between a Highland.',
      tags: ['Classic', 'Historical', 'Adventure'],
      author: 'Emma Harper'
    },
    {
      title: 'The Quantum Enigma',
      image: './assets/images/media/books/3.jpg',
      publishedOn: 'Jun 08, 1994',
      description: 'A brilliant physicist stumbles upon a groundbreaking quantum discovery, but soon finds..',
      tags: ['Science Fiction', 'Mystery', 'Thriller'],
      author: 'Dr. James Holloway'
    },
    {
      title: 'Echoes of Eternity',
      image: './assets/images/media/books/1.jpg',
      publishedOn: 'Apr 15, 2010',
      description: 'In a world where magic is fading, a young mage must embark on a perilous..',
      tags: ['Epic', 'Fantasy', 'Adventure'],
      author: 'Sophia Turner'
    },
    {
      title: 'Culinary Alchemy',
      image: './assets/images/media/books/2.jpg',
      publishedOn: 'Oct 22, 1889',
      description: 'Discover the secrets of transforming simple ingredients into..',
      tags: ['Cooking', 'Non-fiction', 'Self-help'],
      author: 'Gordon Meyers'
    },
    {
      title: 'Shadows of the Mind',
      image: './assets/images/media/books/4.jpg',
      publishedOn: 'Jan 06, 1999',
      description: 'A forensic psychologist with a dark past is drawn into a series..',
      tags: ['Psychological Thriller', 'Crime', 'Suspense'],
      author: 'Dr. Lisa Bennett'
    },
    {
      title: 'The Last Garden',
      image: './assets/images/media/books/5.jpg',
      publishedOn: 'Feb 16, 2003',
      description: 'In a future where Earth’s ecosystems are collapsing, a group..',
      tags: ['Dystopian', 'Environmental', 'Drama'],
      author: 'Marcus Reed'
    }
  ];

  newsItems = [
    {
      title: 'Quantum Physicists Break New Ground',
      date: '10,Mar 2024 - 3:15PM',
      location: 'Quantum Research Facility, Geneva',
      description: 'In a groundbreaking experiment, quantum physicists have detected a previously unknown subatomic particle, challenging.',
    },
    {
      title: 'Stunning Images from NASA\'s Perseverance Rover',
      date: '8,Apr 2024 - 9:00AM',
      location: 'Jezero Crater, Mars',
      description: 'NASA\'s Perseverance rover has captured breathtaking images of the Martian landscape, revealing tantalizing clues about the planet\'s geology.',
    },
    {
      title: 'Breakthrough in Cancer Research',
      date: '5,May 2024 - 1:45PM',
      location: 'Genetech Laboratories',
      description: 'Researchers have made a significant breakthrough in cancer treatment with the development of a novel therapy that targets.',
    },
    {
      title: 'Chef Julia Rodriguez Launches Global Initiative',
      date: '5,Jun 2024 - 11:30AM',
      location: '20 countries',
      description: 'Renowned chef and humanitarian, Chef Julia Rodriguez, has launched a global initiative to combat.',
    },
    {
      title: 'Historic Peace Agreement Signed',
      date: '22,Jul 2024 - 4:20PM',
      location: 'United Nations',
      description: 'In a historic move, long-time rival nations have signed a landmark peace agreement.',
    },
    {
      title: 'Breakthrough in Renewable Energy',
      date: '8,Aug 2024 - 10:00AM',
      location: 'SolarTech Innovations',
      description: 'Scientists have achieved a major breakthrough in renewable energy with the development.',
    }
  ];

}
