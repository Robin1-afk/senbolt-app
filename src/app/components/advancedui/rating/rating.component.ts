import { ChangeDetectorRef, Component } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';
import { FormsModule, ReactiveFormsModule, UntypedFormControl,Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { BarRatingComponent } from '../../../../@spk/spk-reusable-plugins/bar-rating/bar-rating.component';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [SharedModule,BarRatingModule,FormsModule,ReactiveFormsModule,BarRatingComponent],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  starRate = 0;
  starRate1 = 5;
  starRate2 = 4;
  starRate3 = 6;
  starRate4 = 5;
  starRate5 = 0;
  starRate6 = 3;
text: any;
// reset(){
//  this.starRate6 = 0;
// }
ratings={
  starRate:'starRate',
  max:5,
  theme:'square'
}
customratings={
  starRate:'starRate2',
  max:10,
  theme:'horizontal'
}

unlimitedratings={
  starRate:5,
  max:10,
  theme:'default'
}
reset(){
  this.starRate6 = 0;
 }
resetratings={
  starRate1:0,
  max:5,
  theme:'default'
}
simulatedrating={
  starRate:2,
  max:5,
  theme:'movie',
  text:true,
  titles:['Bad', 'Mediocre', 'Good', 'Awesome']
}
simulatedrating1={
  max:5,
  theme:'stars',
  text:true,
  titles:['1', '2', '3', '4']
}
}