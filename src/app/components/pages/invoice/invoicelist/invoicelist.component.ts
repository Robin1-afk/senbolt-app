import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexchartsComponent } from '../../../../../@spk/spk-apexcharts/apexcharts.component';
import { CountUpModule } from 'ngx-countup';
const DATA=[
  {
    img:"./assets/images/faces/11.jpg",
    Name:'Henry Milo',
    Mail:'henrymilo2416@gmail.com',
    Id:'#SHG20241323',
    IssuedDate:'13,Mar 2024',
    Price:'$898.12',
    bg:'success',
    text:'success',
    Status:'Paid',
    DueDate:'25,May 2024'
  },
  {
    img:"./assets/images/faces/7.jpg",
    Name:'Priya Riva',
    Mail:'priyariva3214@gmail.com',
    Id:'#SHG20244578',
    IssuedDate:'26,Apr 2024',
    Price:'$235.52',
    bg:'warning',
    text:'warning',
    Status:'Pending',
    DueDate:'13,May 2024'
  },
  {
    img:"./assets/images/faces/15.jpg",
    Name:'Calvin James',
    Mail:'calvinjames143@gmail.com',
    Id:'#SHG20240012',
    IssuedDate:'30,Mar 2024',
    Price:'$4872.41',
    bg:'danger',
    text:'danger',
    Status:'Overdue',
    DueDate:'30,May 2024'
  },
  {
    img:"./assets/images/faces/12.jpg",
    Name:'Sebastian Leo',
    Mail:'Sebastian Leo@gmail.com',
    Id:'#SHG20246631',
    IssuedDate:'18,Mar 2024',
    Price:'$457.56',
    bg:'success',
    text:'success',
    Status:'Paid',
    DueDate:'18,May 2024'
  },
  {
    img:"./assets/images/faces/4.jpg",
    Name:'Anna Angel',
    Mail:'annaangel114@gmail.com',
    Id:' #SHG20249897',
    IssuedDate:' 18,Mar 2024',
    Price:'$2,568.66',
    bg:'primary',
    text:'primary',
    Status:'Due By 1 Day',
    DueDate:'18,May 2024'
  },
  {
    img:"./assets/images/faces/7.jpg",
    Name:'Rani Advitha',
    Mail:'raniadvitha87@gmail.com',
    Id:'#SHG20245757',
    IssuedDate:'02,Mar 2024',
    Price:'$7896.36',
    bg:'success',
    text:'success',
    Status:'Paid',
    DueDate:'18,May 2024'
  },
  {
    img:"./assets/images/faces/9.jpg",
    Name:'Helma Finlee',
    Mail:'helmafinlee@gmail.com',
    Id:'#SHG20246301',
    IssuedDate:'15,Mar 2024',
    Price:'$1,999.99',
    bg:'success',
    text:'success',
    Status:'Paid',
    DueDate:'15,May 2024'
  },
  {
    img:"./assets/images/faces/13.jpg",
    Name:'Robert Max',
    Mail:'robertmax@gmail.com',
    Id:'#SHG20241603',
    IssuedDate:'21,Mar 2024',
    Price:'$2,985.33',
    bg:'warning',
    text:'warning',
    Status:'Pending',
    DueDate:' 21,May 2024'
  },
  {
    img:"./assets/images/faces/8.jpg",
    Name:'Alisa Juliet',
    Mail:'alisajuliet555@gmail.com',
    Id:'#SHG20242434',
    IssuedDate:'08,Jul 2024',
    Price:'$1,841.60',
    bg:'success',
    text:'success',
    Status:'Paid',
    DueDate:'15,Mar 2024'
  },
]

@Component({
  selector: 'app-invoicelist',
  standalone: true,
  imports: [SharedModule,RouterModule,SpkReusableTablesComponent,SpkApexchartsComponent,SpkDropdownsComponent,CountUpModule],
  templateUrl: './invoicelist.component.html',
  styleUrl: './invoicelist.component.scss'
})
export class InvoicelistComponent {
  invoices=DATA
  click(id:string){
    const data = this.invoices.filter((x: { Price: string }) => {
      return x.Price != id;
  
    })
    this.invoices = data;

}
chartOptions:any= {
  series: [{
    name: 'Total Invoices',
    data: [56, 55, 25, 65, 89, 45, 65, 56, 78, 45, 56, 48],
}, {
    name: 'Paid Invoices',
    data: [56, 89, 45, 48, 44, 35, 48, 56, 89, 46, 75, 42],
}, {
    name: 'Pending Invoices',
    data: [75, 86, 35, 24, 68, 57, 94, 95, 78, 48, 68, 99],
}, {
    name: 'Overdue Invoices',
    data: [89, 44, 62, 77, 24, 65, 48, 39, 47, 46, 57, 88],
}],
chart: {
type: "bar",
height: 263,
stacked: true,
toolbar: {
    show: false,
}
},
plotOptions: {
  bar: {
      columnWidth: '25%',
      borderRadius: 1,
  }
},
grid: {
  show: false,
  borderColor: '#f2f6f7',
},
dataLabels: {
enabled: false,
},
colors: ["rgba(255, 142, 111, 1)", "rgba(255, 93, 159, 1)", "rgba(227, 84, 212, 1)", "rgba(var(--primary-rgb))"],
stroke: {
width: 0,
},
legend: {
show: true,
position: 'top',
horizontalAlign: 'center',
markers: {
  size: 4,
  shape: undefined,
  border:'none',
  strokeWidth: 0
},
},
xaxis: {
categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
labels: {
  show: true,
  style: {
    colors: "#8c9097",
    fontSize: "11px",
    fontWeight: 500,
    cssClass: "apexcharts-xaxis-label",
  },
},
},
yaxis: {
title: {
  style: {
    color: "#8c9097",
  },
},
labels: {
  show: true,
  style: {
    colors: "#8c9097",
    fontSize: "11px",
    fontWeight: 500,
    cssClass: "apexcharts-xaxis-label",
  },
},
}, 
};
invoiceColumn=[
  {header:"Client",field:"Client"},
  {header:"Invoice ID",field:"Invoice ID"},
  {header:"Issued Date",field:"Issued Date"},
  {header:"Amount",field:"Amount"},
  {header:"Status",field:"Status"},
  {header:"Due Date",field:"Due Date"},
  {header:"Action",field:"Action"},
]
}
