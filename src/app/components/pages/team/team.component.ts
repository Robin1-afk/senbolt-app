import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkTeamCardComponent } from '../../../../@spk/reusable-landing-card/spk-team-card/spk-team-card.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [SharedModule,SpkTeamCardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Hadley Kylin',
      role: 'Director',
      image: './assets/images/faces/1.jpg',
      badgeColor: 'primary',
      class1:"mb-3",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    },
    {
      name: 'Ethan Mitchell',
      role: 'Manager',
      image: './assets/images/faces/2.jpg',
      badgeColor: 'primarytint1color ',
      class1:"mb-3",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    },
    {
      name: 'Iliana Lilly',
      role: 'Creative Director',
      image: './assets/images/faces/3.jpg',
      badgeColor: 'primarytint2color ',
      class1:"mb-3",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    },
    {
      name: 'Jasmine Della',
      role: 'Board Director',
      image: './assets/images/faces/4.jpg',
      badgeColor: 'primarytint3color ',
      class1:"mb-3",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    },
    {
      name: 'Aurora Reed',
      role: 'Board Director',
      image: './assets/images/faces/5.jpg',
      badgeColor: 'secondary',
      class1:"mb-3",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    },
    {
      name: 'Ava Taylor',
      role: 'Board Director',
      image: './assets/images/faces/6.jpg',
      badgeColor: 'success',
      class1:"mb-3",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    },
    {
      name: 'Spencer Robin',
      role: 'Board Director',
      image: './assets/images/faces/7.jpg',
      badgeColor: 'primary',
      class1:"mb-3",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    },
    {
      name: 'Owen Foster',
      role: 'Board Director',
      image: './assets/images/faces/8.jpg',
      badgeColor: 'primarytint1color ',
      class1:"mb-3",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.'
    }
  ];
}
