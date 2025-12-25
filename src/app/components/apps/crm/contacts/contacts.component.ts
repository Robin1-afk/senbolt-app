import { Component, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkFlatpickrComponent } from '../../../../../@spk/spk-flatpickr/spk-flatpickr.component';
const DATA=[
  {
    id:1,
    img:"./assets/images/faces/4.jpg",
    name:'John Doe',
    Date:'Jun, 15 2024 - 10:30 AM',
    Score:'380',
    Email:'john.doe@gmail.com',
    logo:'./assets/images/company-logos/2.png',
    priority:"High Priority",
    company:'Example Corp',
    phnNo:'123-456-7890',
    Source:'Social Media',
    bg:'danger',
    Tags:'VIP Client',
    leadSource:"Referral",
    checked:false
  },
  {
    id:2,
    img:"./assets/images/faces/5.jpg",
    name:'Alice Smith',
    Date:'Jun, 14 2024 - 3:15 PM',
    Score:'425',
    Email:'alice.smith@gmail.com',
    logo:'./assets/images/company-logos/3.png',
    priority:"Medium Priority",
    company:'Smith & Co',
    phnNo:'987-654-3210',
    Source:'Social Media',
    bg:'warning',
    Tags:'Regular Client',
     checked:false,
    leadSource:"LinkedIn"
  },
  {
    id:3,
    img:"./assets/images/faces/6.jpg",
    name:'Michael Johnson',
    Date:'Jun, 13 2024 - 9:00 AM',
    Score:'300',
    Email:'michael.johnson@gmail.com',
    logo:'./assets/images/company-logos/4.png',
    priority:"Low Priority",
    company:'Johnson Enterprises',
    phnNo:'555-123-4567',
    Source:'Social Media',
    bg:'success',
    Tags:'Potential Client',
     checked:false,
    leadSource:"Website"
  },
  {
    id:4,
    img:"./assets/images/faces/8.jpg",
    name:'Sophia Martinez',
    Date:'Jun, 12 2024 - 2:00 PM',
    Score:'500',
    Email:'sophia.martinez@gmail.com',
    logo:'./assets/images/company-logos/5.png',
    priority:"Medium Priority",
    company:'Martinez Enterprises',
    phnNo:'234-567-8901',
    Source:'Social Media',
    bg:'warning',
    Tags:'Potential Lead',
     checked:false,
    leadSource:"Cold Call"
  },
  {
    id:5,
    img:"./assets/images/faces/9.jpg",
    name:'David Wilson',
    Date:'Jun, 11 2024 - 11:45 AM',
    Score:'320',
    Email:'david.wilson@gmail.com',
    logo:'./assets/images/company-logos/6.png',
    priority:"Low Priority",
    company:'Wilson & Sons',
    phnNo:'345-678-9012',
    bg:'success',
    Tags:'Regular Client',
     checked:false,
    leadSource:"Email Campaign"
  },
  {
    id:6,
    img:"./assets/images/faces/10.jpg",
    name:'Emma Brown',
    Date:'Jun, 10 2024 - 1:30 PM',
    Score:'280',
    Email:'emma.brown@gmail.com',
    logo:'./assets/images/company-logos/7.png',
    priority:"High Priority",
    company:'Brown Solutions',
    phnNo:'456-789-0123',
    bg:'danger',
    Tags:'VIP Client',
     checked:false,
    leadSource:"Trade Show"
  },
  {
    id:7,
    img:"./assets/images/faces/12.jpg",
    name:'Olivia Davis',
    Date:'Jun, 9 2024 - 9:15 AM',
    Score:'280',
    Email:'olivia.davis@gmail.com',
    logo:'./assets/images/company-logos/8.png',
    priority:"Medium Priority",
    company:'Davis Consulting',
    phnNo:'567-890-1234',
    bg:'warning',
    Tags:'Regular Client',
     checked:false,
    leadSource:"Webinar"
  },
  {
    id:8,
    img:"./assets/images/faces/13.jpg",
    name:'William Clark',
    Date:'Jun, 8 2024 - 4:30 PM',
    Score:'350',
    Email:'william.clark@gmail.com',
    logo:'./assets/images/company-logos/9.png',
    priority:"High Priority",
    company:'Clark Solutions',
    phnNo:'567-890-1234',
    bg:'danger',
    Tags:'VIP Client',
     checked:false,
    leadSource:"Advertisement"
  },
]
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [SharedModule,FormsModule,FlatpickrModule,SpkDropdownsComponent,SpkReusableTablesComponent,SpkNgSelectComponent,SpkFlatpickrComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  allTasksChecked: boolean=false;
  constructor() {}
  handleToggleSelectAll(checked: any) {
    this.Contacts.forEach(Contact => Contact.checked = checked);
    this.allTasksChecked = checked;
  }
  url1: string = ''; // Assuming url1 is a property in your component

handleFileInput(event: any): void {
  const file = event.target.files[0];
  if (file) { 
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.url1 = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

  Contacts=DATA
  click(id:number){
    const data = this.Contacts.filter((x: { id: number }) => {
      return x.id != id;
  
    })
    this.Contacts = data;
}
closeResult = '';

flatpickrOptions: any = {
  inline: true,
};
// flatpickrOptions: FlatpickrOptions;


ngOnInit() {
  this.flatpickrOptions = {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
  };

 
}
url2 = '';
onSelectFile2(event: any) {
  if (event.target && event.target.files && event.target.files[0]) {
    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data URL

    reader.onload = (event: any) => {
      // called once readAsDataURL is completed
      this.url2 = event.target.result;
    };
  }
}
toggleSelectAll(event: Event) {
  this.allTasksChecked = (event.target as HTMLInputElement).checked;
}
contactColumn=[
  {header:"Contact Name",field:"Contact Name"},
  {header:"Email",field:"Email"},
  {header:"Company",field:"Company"},
  {header:"Lead Score",field:"Lead Score"},
  {header:"Priority",field:"Priority"},
  {header:"Phone",field:"Phone"},
  {header:"Tags",field:"Tags"},
  {header:"Lead Source",field:"Lead Source"},
  {header:"Actions",field:"Actions"},
]

leads=[
  {label:'Social Media',value:1},
  {label:'Direct mail',value:2},
  {label:'Blog Articles',value:3},
  {label:'Affiliates',value:4},
  {label:'Organic search',value:5},
]
Tags=[
  {label:'Select Tag',value:1},
  {label:'New Lead',value:2},
  {label:'Prospect',value:3},
  {label:'Customer',value:4},
  {label:'Hot Lead',value:5},
  {label:'Partner',value:6},
  {label:'LostCustomer',value:7},
  {label:'Influencer',value:8},
  {label:'Subscriber',value:9},
]

selectedTags=[4,7,9];
handleSelectChange(value: any | any[]) {
}
}
