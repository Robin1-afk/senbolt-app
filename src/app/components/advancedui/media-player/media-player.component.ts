import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [SharedModule,CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.scss'
})
export class MediaPlayerComponent {
 // Video URLs
 posterUrl: string = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg';
 videoUrl576p: string = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4';
 videoUrl720p: string = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4';
 videoUrl1080p: string = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4';

 // YouTube Video
//  youtubeVideoUrl: SafeResourceUrl;

 // Audio URL
 audioUrl: string = './assets/audio/perfect-beauty.mp3';
  youtubeVideoUrl: SafeResourceUrl;

 constructor(private sanitizer: DomSanitizer) {
   this.youtubeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-lDlbQ7DiCI?si=EerYCepJFDTb5xOl');
 }
}
