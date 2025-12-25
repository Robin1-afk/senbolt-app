import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-navtabs',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.scss']
})
export class NavtabsComponent {
  defaultTab = [
    { id: 'home1', title: 'Home', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 'about1', title: 'About', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' },
    { id: 'service1', title: 'Services', content: 'There are many variations of passages of Lorem Ipsum available.' },
    { id: 'license1', title: 'License', content: 'It is a long established fact that a reader will be distracted by the readable content.' }
  ];
}
