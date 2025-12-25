
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkFlatpickrComponent } from '../../../../../@spk/spk-flatpickr/spk-flatpickr.component';

@Component({
  selector: 'app-job-post',
  standalone: true,
  imports: [SharedModule,FormsModule, FlatpickrModule,SpkNgSelectComponent,SpkFlatpickrComponent],
  templateUrl: './job-post.component.html',
  styleUrl: './job-post.component.scss'
})
export class JobPostComponent {
 
  Category=[
    {label:"Development",value:1},
    {label:"Marketing",value:2},
    {label:"IT Software",value:3},
  ]
  Experience=[
    {label:"0 - 1 Years",value:1},
    {label:"1 - 3 Years",value:2},
    {label:"3 - 5 Years",value:3},
  ]
  Type=[
    {label:"Contract",value:1},
    {label:"Freelance",value:2},
    {label:"Full Time",value:3},
    {label:"Part Time",value:4},
    {label:"Internship",value:5},
  ]
  Priority=[
    {label:"Normal",value:1},
    {label:"Urgent",value:2},
  ]
  Vacancies=[
    {label:"10",value:1},
    {label:"20",value:2},
    {label:"30",value:3},
    {label:"40",value:4},
  ]
  Salary=[
    {label:"0 - $2,00,000 / Year",value:1},
    {label:"$2,00,000 - $3,00,000 / Year",value:2},
    {label:"$3,00,000 - $5,00,000 / Year",value:3},
  ]
  Skills=[
    {value:1,label:'CSS'},
    {value:2,label:'JavaScript'},
    {value:3,label:'React'},
    {value:4,label:'HTML'},

  ]
  selectedSkills=[1,2,4]
  Preferences=[
    {label:"No Preferences",value:1},
    {label:"Male Only",value:2},
    {label:"Female Only",value:3},
  ]
  languages=[
    {value:1,label:'French'},
    {value:2,label:'Arabic'},
    {value:3,label:'Hindi'},
    {value:4,label:'English'},

  ]
  Qualifications=[
    {value:1,label:'Diploma'},
    {value:2,label:'MBA'},
    {value:3,label:'MCA'},
    {value:4,label:'Graduate'},

  ]
  selectedQualifications=[4,2,3];
  selectedLanguages=[4,2];
  Employer=[
    {value:1,label:'Alice Angel'},
    {value:2,label:'Justin  Roy'},
    {value:3,label:'Georgia Kate'},
    {value:4,label:'Jacob Jace'},
  ]
  Country=[
    {value:1,label:'India'},
    {value:2,label:'USA'},
    {value:3,label:'Germany'},
    {value:4,label:'Spain'},
    {value:4,label:'Urgentina'},

  ]
}