import { Component, ElementRef, inject, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
const DATA=[
  {
    id:1,
    logo:'./assets/images/company-logos/2.png',
    name:'Alpha Solutions',
    Email:'alpha.solutions@example.com',
    phnNo:'1234-567-890',
    bg:'primarytint1color',
    Size:'Enterprise',
    Industry:'Software Development',
    img:"./assets/images/faces/5.jpg",
    Contact:'Michael',
    Deals:'350',
    checked:false
    
  },
  {
    id:2,
    logo:'./assets/images/company-logos/3.png',
    name:'Beta Innovations',
    Email:'contact@betainnovations.com',
    phnNo:'9876-543-210',
    bg:'primary',
    Size:'Startup',
    Industry:'Biotechnology',
    img:"./assets/images/faces/6.jpg",
    Contact:'Sophia',
    Deals:'420',
    checked:false
  },
  {
    id:3,
    logo:'./assets/images/company-logos/4.png',
    name:'Gamma Solutions',
    Email:'info@gammasolutions.com',
    phnNo:'555-123-4567',
    bg:'primarytint1color',
    Size:'Enterprise',
    Industry:'Consulting Services',
    img:"./assets/images/faces/7.jpg",
    Contact:'Oliver',
    Deals:'390',
    checked:false
  },
  {
    id:4,
    logo:'./assets/images/company-logos/5.png',
    name:'Delta Tech Solutions',
    Email:'contact@deltatech.com',
    phnNo:'678-987-6543',
    bg:'primary',
    Size:'Startup',
    Industry:'Technology Solutions',
    img:"./assets/images/faces/8.jpg",
    Contact:'Sophie',
    Deals:'280',
    checked:false
  },
  {
    id:5,
    logo:'./assets/images/company-logos/6.png',
    name:'Epsilon Innovations',
    Email:'info@epsiloninnovations.com',
    phnNo:'111-222-3333',
    bg:'primary',
    Size:'Startup',
    Industry:'Innovation Services',
    img:"./assets/images/faces/9.jpg",
    Contact:'Emma',
    Deals:'320',
    checked:false
  },
  {
    id:6,
    logo:'./assets/images/company-logos/8.png',
    name:'Theta Systems',
    Email:'info@thetasystems.com',
    phnNo:'456-789-0123',
    bg:'primarytint1color',
    Size:'Enterprise',
    Industry:'Software Solutions',
    img:"./assets/images/faces/10.jpg",
    Contact:'Liam',
    Deals:'410',
    checked:false
  },
  {
    id:7,
    logo:'./assets/images/company-logos/9.png',
    name:'Iota Innovations',
    Email:'contact@iotainnovations.com',
    phnNo:'333-444-5555',
    bg:'primary',
    Size:'Startup',
    Industry:' Digital Marketing',
    img:"./assets/images/faces/11.jpg",
    Contact:'Ava',
    Deals:'290',
    checked:false
  },
  {
    id:8,
    logo:'./assets/images/company-logos/4.png',
    name:'Alpha Solutions',
    Email:'info@alphasolutions.com',
    phnNo:'1234-567-890',
    bg:'primarytint1color',
    Size:'Enterprise',
    Industry:'Technology Services',
    img:"./assets/images/faces/7.jpg",
    Contact:'John',
    Deals:'570',
    checked:false
  },
  {
    id:9,
    logo:'./assets/images/company-logos/5.png',
    name:'Gamma Industries',
    Email:'contact@gammatech.com',
    phnNo:'8765-432-109',
    bg:'primary',
    Size:'Startup',
    Industry:'Engineering',
    img:"./assets/images/faces/9.jpg",
    Contact:'Emily',
    Deals:'320',
    checked:false
  },

]

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [SharedModule,FormsModule,ReactiveFormsModule,SpkDropdownsComponent,SpkReusableTablesComponent,SpkNgSelectComponent],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {
 
  handleToggleSelectAll(checked: any) {
    this.Companies.forEach(Companie => Companie.checked = checked);
    this.allTasksChecked = checked;
  }
  @ViewChild('modal')
  modal!: ElementRef;
  @ViewChild('modal')
  modal2!: ElementRef;

  Companies=DATA
  allTasksChecked!: boolean;
  constructor(
	) {
	
	}
  click(id:number){
    const data = this.Companies.filter((x: { id: number }) => {
      return x.id != id;
  
    })
    this.Companies = data;
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
companiesColumn=[
  {header:"Company Name",field:"CompanyName"},
  {header:"Email",field:"Email"},
  {header:"Phone",field:"Phone"},
  {header:"Company Size",field:"CompanySize"},
  {header:"Industry",field:"Industry"},
  {header:"Key Contact",field:"KeyContact"},
  {header:"Total Deals",field:"TotalDeals"},
  {header:"Actions",field:"Actions"},
]
Tags=[
  {label:'Information Technology',value:1},
  {label:'Telecommunications',value:2},
  {label:'Logistics',value:3},
  {label:'Professional Services',value:4},
  {label:'Education',value:5},
  {label:'Manufacturing',value:6},
  {label:'Healthcare',value:7},
]
companiesSize=[
  {label:'Company Size',value:1},
  {label:'Corporate',value:2},
  {label:'Small Business',value:3},
  {label:'Micro Business',value:4},
  {label:'Startup',value:5},
  {label:'Large Enterprise',value:6},
  {label:'Medium Size',value:7},
]
handleSelectChange(value: any | any[]) {
}
}