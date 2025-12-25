import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
const DATA=[
  {
    id:1,
    img:"./assets/images/faces/4.jpg",
    name:'Catalina',
    Email:'Catalina2981@gmail.com',
    logo:'./assets/images/company-logos/1.png',
    company:'Spruko Technologies',
    phnNo:'1678-28993-223',
    Status:'New Lead',
    Source:'Social Media',
    bg:'primarytint1color',
    src1: "./assets/images/faces/2.jpg",
    owner:'Jane Smith',
    contacted:"2024-06-15",
    checked:false
  },
  {
    id:2,
    img:"./assets/images/faces/5.jpg",
    name:'David Johnson',
    Status:'Prospect',
     Email:'david.johnson@example.com',
    logo:'./assets/images/company-logos/2.png',
    company:'Global Solutions Ltd.',
    phnNo:'+1-987-654-3210',
    Source:'Email Campaign',
    bg:'primary',
    src1: "./assets/images/faces/3.jpg",
    owner:'Michael Brown',
    contacted:'2024-06-14',
    checked:false
  },
  {
    id:3,
    img:"./assets/images/faces/6.jpg",
    name:'Sophia Adams',
    Status:'Lead',
     Email:'sophia.adams@example.com',
    logo:'./assets/images/company-logos/3.png',
    company:'Beta Innovations.',
    phnNo:'9876-543-210',
    Source:'Website',
    bg:'primarytint1color',
    src1: "./assets/images/faces/7.jpg",
    owner:'Emma Wilson',
    contacted:'2024-06-13',
    checked:false
  },
  {
    id:4,
    img:"./assets/images/faces/10.jpg",
    name:'Sophie Turner',
    Status:'Prospect',
     Email:'sophie.turner@example.com',
    logo:'./assets/images/company-logos/5.png',
    company:'Delta Enterprises',
    phnNo:'9876-543-210',
    Source:'Cold Call',
    bg:'primary',
    src1: "./assets/images/faces/11.jpg",
    owner:'Olivia Moore',
    contacted:'2024-06-11',
    checked:false
  },  
  {
    id:5,
    img:"./assets/images/faces/12.jpg",
    name:'Emma Garcia',
    Status:'Lead',
     Email:'emma.garcia@example.com',
    logo:'./assets/images/company-logos/6.png',
    company:'Gamma Solutions',
    phnNo:'+55-1234-5678',
    Source:'Referral',
    bg:'primarytint1color',
    src1: "./assets/images/faces/13.jpg",
    owner:'Daniel Harris',
    contacted:'2024-06-10',
    checked:false
  },
  {
    id:6,
    img:"./assets/images/faces/14.jpg",
    name:'Sophia Lee',
    Status:'Lead',
    Email:'sophia.lee@example.com',
    logo:'./assets/images/company-logos/7.png',
    company:'Omega Solutions',
    phnNo:'+91-987-654-3210',
    Source:'Website',
    bg:'primarytint1color',
    src1: "./assets/images/faces/15.jpg",
    owner:'Sophie Turner',
    contacted:'2024-06-09',
    checked:false
  },
  {
    id:7,
    img:"./assets/images/faces/16.jpg",
    name:'Lucas Martin',
    Status:'Prospect',
    Email:'lucas.martin@example.com',
    logo:'./assets/images/company-logos/8.png',
    company:'Phoenix Innovations',
    phnNo:'+1-234-567-8901',
    Source:'Cold Call',
    bg:'primary',
    src1: "./assets/images/faces/11.jpg",
    owner:'Olivia Moore',
    contacted:'2024-06-08'
  },
  {
    id:8,
    img:"./assets/images/faces/4.jpg",
    name:'Catalina',
    Status:'New Lead',
    Email:'Catalina2981@gmail.com',
    logo:'./assets/images/company-logos/1.png',
    company:'Spruko Technologies',
    phnNo:'1678-28993-223',
    Source:'Social Media',
    bg:'primarytint1color',
    src1: "./assets/images/faces/2.jpg",
    owner:'Jane Smith',
    contacted:'2024-06-15'
  },
  {
    id:9,
    img:"./assets/images/faces/5.jpg",
    name:'Isabella Adams',
    Status:'Lead',
    Email:'isabella.adams@example.com',
    logo:'./assets/images/company-logos/9.png',
    company:'Gamma Technologies',
    phnNo:'+7-987-654-3210',
    Source:'Advertisement',
    bg:'primarytint1color',
    src1: "./assets/images/faces/12.jpg",
    owner:'Sophia Lee',
    contacted:'2024-06-07'
  },
]
@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [SharedModule,FormsModule,SpkDropdownsComponent,SpkReusableTablesComponent,SpkNgSelectComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss'
})
export class LeadsComponent {
  allTasksChecked: boolean = false;
  constructor(
	) {

	}
  Leads=DATA
  click(id:number){
    const data = this.Leads.filter((x :{ id: number }) => {
      return x.id != id;
  
    })
    this.Leads = data;
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
toggleSelectAll(event: Event) {
  this.allTasksChecked = (event.target as HTMLInputElement).checked;
}
handleToggleSelectAll(checked: any) {
  this.Leads.forEach(Lead => Lead.checked = checked);
  this.allTasksChecked = checked;
}
leadsColumn=[
  {header:"Contact Name",field:"Contact Name"},
  {header:"Company",field:"Company"},
  {header:"Email",field:"Email"},
  {header:"Lead Status",field:"Lead Status"},
  {header:"Phone",field:"Phone"},
  {header:"Lead Source",field:"Lead Source"},
  {header:"Owner",field:"Owner"},
  {header:"Last Contracted",field:"Last Contracted"},
  {header:"Actions",field:"Actions"},
]
handleSelectChange(value: any | any[]) {
}
Leadsstatus=[
  {label:'New',value:1},
  {label:'Follow-up',value:2},
  {label:'Closed',value:3},
  {label:'Contacted',value:4},
  {label:'Disqualified',value:5},
  {label:'Qualified',value:6},
]
Leadssource=[
  {label:'Social Media',value:1},
  {label:'Direct mail',value:2},
  {label:'Blog Articles',value:3},
  {label:'Affiliates',value:4},
  {label:'Organic search',value:5},
]
Tags=[
  {label:'New Lead',value:1},
  {label:'Prospect',value:2},
  {label:'Customer',value:3},
  {label:'Hot Lead',value:4},
  {label:'Partner',value:5},
  {label:'LostCustomer',value:6},
  {label:'Influencer',value:4},
  {label:'Subscriber',value:5},
]
}