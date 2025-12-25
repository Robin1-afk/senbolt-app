import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkSalesCardsComponent } from '../../../../@spk/reusable-dashboard/spk-sales-cards/spk-sales-cards.component';
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [SharedModule,SpkSalesCardsComponent,SpkApexchartsComponent,SpkReusableTablesComponent,SpkDropdownsComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {
  // constructor(private sanitizer: DomSanitizer) {}
  // sanitizeIcon(svg: string): SafeHtml {
  //   return this.sanitizer.bypassSecurityTrustHtml(svg);
  // }
  orderColumns = [
    { header: 'Order ID', field: 'order' },
    { header: 'Customer', field: 'customer' },
    { header: 'Date', field: 'date' },
    { header: 'Amount', field: 'price' },
    { header: 'Status', field: 'status' },
  ];
  trafficColumn = [
    { header: 'Browser', field: 'browser' },
    { header: 'Traffic', field: 'traffic' },
    { header: 'Sessions', field: 'sessions' },
  ];
  productColumns=[
    { header: 'Product Id', field: 'productid' },
    { header: 'Product Name', field: 'productname' },
    { header: 'Category', field: 'category' },
    { header: '% Discount', field: 'discount' },
    { header: 'Price', field: 'price' },
    { header: 'Status', field: 'status' },
    { header: 'Added Date', field: 'addeddate' },
    { header: 'Actions', field: 'actions' },
  ]
  products=[
    {
      id:"#1547988",
      src:"./assets/images/ecommerce/png/12.png",
      product:"Sweater Coat",
      category:"Women's wear",
      percent:"40%",
      price:"$241.08",
      status:"Published",
      bg:"success",
      date:"15-05-2024",
    },
    {
      id:"#1415023",
      src:"./assets/images/ecommerce/png/6.png",
      product:"Cushion Chair",
      category:"Furniture",
      percent:"30%",
      price:"$1,489.00",
      status:"Pending",
      bg:"warning",
      date:"20-05-2024",
    },
    {
      id:"#4578162",
      src:"./assets/images/ecommerce/png/23.png",
      product:"Smart Watch",
      category:"Gadgets",
      percent:"10%",
      price:"$2,457.08",
      status:"Saved as Draft",
      bg:"info",
      date:"06-02-2024",
    },
    {
      id:"#4578954",
      src:"./assets/images/ecommerce/png/32.png",
      product:"Alarm Clock",
      category:"Home Decor",
      percent:"20%",
      price:"$359.99",
      status:"Published",
      bg:"success",
      date:"26-01-2024",
    },
    {
      id:"#8745814",
      src:"./assets/images/ecommerce/png/28.png",
      product:"Running Shoes",
      category:"Athletic Footwear",
      percent:"0%",
      price:"$359.99",
      status:"Published",
      bg:"success",
      date:"24-03-2024",
    },
  ]
  click(id:string){
    const data = this.products.filter((x: { id: string }) => {
      return x.id != id;
  
    })
    this.products = data;
  
  }
  traffic=[
    {
      browser:"Chrome",
      bg:"primarytint3color",
      icon:"chrome-line",
      progress:"78",
      price:"15,248",
      arrow:"ri-arrow-up-s-fill ms-1 text-success align-middle fs-18"
    },
    {
      browser:"Safari",
      bg:"primarytint2color",
      icon:"safari-line",
      progress:"56",
      price:"22,945",
      arrow:"ri-arrow-up-s-fill ms-1 text-success align-middle fs-18"

    },
    {
      browser:"Opera",
      bg:"primarytint1color",
      icon:"opera-line",
      progress:"62",
      price:"32,453",
      arrow:"ri-arrow-down-s-fill ms-1 text-danger align-middle fs-18"

    },
    {
      browser:"Edge",
      bg:"primary",
      icon:"edge-line",
      progress:"45",
      price:"9,886",
      arrow:"ri-arrow-up-s-fill ms-1 text-success align-middle fs-18"

    }
  ]
  orders=[
    {
      id:"#SPK781",
      src:"./assets/images/faces/15.jpg",
      customer:"Priceton Gray",
      date:"Mar 18,2024",
      price:"$2,145.90",
      status:"Paid",
      bg:"success"
    },
    {
      id:"#SPK782",
      src:"./assets/images/faces/4.jpg",
      customer:"Elsa Urena",
      date:"Mar 20,2024",
      price:"$3,245.90",
      status:"Unpaid",
      bg:"danger"
    },
    {
      id:"#SPK783",
      src:"./assets/images/faces/5.jpg",
      customer:"Gloria",
      date:"Mar 24,2024",
      price:"$2,145.90",
      status:"Paid",
      bg:"success"
    },
    {
      id:"#SPK784",
      src:"./assets/images/faces/6.jpg",
      customer:"Priya",
      date:"Mar 25,2024",
      price:"$2,355.90",
      status:"Pending",
      bg:"warning"
    },
    {
      id:"#SPK785",
      src:"./assets/images/faces/11.jpg",
      customer:"Adam Smith",
      date:"Mar 18,2024",
      price:"$3,445.90",
      status:"UnPaid",
      bg:"danger"
    }
  ]

  chartOptions:any={
    chart: {
      height: 433,
      toolbar: {
        show: false,
      },
      zoom:{
        enabled:false
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 10,
        left: 0,
        blur: 1,
        color: ["rgba(0, 0, 0, 0.1)"],
        opacity: 0.3,
      },
      
    },
    grid: {
      show: true,
      borderColor: "rgba(119, 119, 142, 0.1)",
      strokeDashArray: 4,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1.5, 1.5, 1],
      curve: ["smooth","straight"],
      dashArray: [ 4, 4, 0],
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "center",
      fontWeight: 600,
      fontSize: "11px",
      tooltipHoverFormatter: function (val:any, opts:any) {
        return (
          val +
          " - " +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ""
        );
      },
      labels: {
        colors: "#74767c",
      },
      markers: {
        strokeWidth: 0,
        size: 4,
        shape: "circle",
        radius: 12,
        offsetX: 0,
        offsetY: 0,
      },
    },
    series: [
      {
        name: "Sales",
        data: [20, 42, 28, 79, 68, 84, 48, 65, 45, 80, 25, 75],
        type: "line",
      },
      {
        name: "Profit",
        data: [10, 39, 25, 74, 58, 80, 42, 58, 31, 71, 10, 82],
        type: "area",
      },
      {
        name: "Expenses",
        data: [38, 53, 34, 33, 30, 28, 39, 36, 32, 40, 22, 74],
        type: "bar",
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
        borderRadiusApplication: "all",
        borderRadiusWhenStacked: "last",
        columnWidth: "15%",
      },
    },
    fill: {
      type: ['soild','soild','soild'],
      gradient:{
          opacityFrom: 0.6,
          opacityTo: 1,
      },
    },
    colors: [ "rgba(227, 84, 212, 1)", "rgba(255, 93, 159, 0.06)", "rgba(var(--primary-rgb))"],
    yaxis: {
      title: {
        style: {
          color: "#adb5be",
          fontSize: "14px",
          fontFamily: "poppins, sans-serif",
          fontWeight: 600,
          cssClass: "apexcharts-yaxis-label",
        },
      },
    },
    xaxis: {
      type: "day",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: true,
        color: "rgba(119, 119, 142, 0.05)",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "rgba(119, 119, 142, 0.05)",
        width: 6,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        rotate: -90,
        style: {
          colors: "#8c9097",
          fontSize: "11px",
          fontWeight: 600,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
  }
  chartOptions1:any= {
    chart: {
        height: 286,
        type: 'radialBar',
        responsive: 'true',
        offsetX: 0,
        offsetY: 15,
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            size: 120,
            imageWidth: 50,
            imageHeight: 50,
            track: {
              strokeWidth: '97%',
                // strokeWidth: "0",
            },
            dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                bottom: 0,
                blur: 3,
                opacity: 0.5
            },
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 30,
                },
                hollow: {
                    size: "60%"
                },
                value: {
                    offsetY: -10,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function (val: string) {
                        return val + "%";
                    }
                }
            }
        }
    },
    colors: ['rgba(var(--primary-rgb))'],
    fill: {
        type: "solid",
        gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: .5,
            gradientToColors: ["#5c67f7"],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    stroke: {
        dashArray: 3
    },
    series: [92],
    labels: ["Orders"]
  };
  chartOptions2:any = {
    series: [{
      name: 'Total Projects',
      data: [120, 200, 150, 300, 250, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1542],
    },],
    chart: {
      stacked: true,
      type: 'bar',
      height: 190,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
      borderColor: '#f2f6f7',
    },
    colors: ["rgba(var(--primary-rgb))"],                        
    plotOptions: {
      bar: {
        columnWidth: '30%',
        borderRadius: 2,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all',
        colors: {
          ranges: [{
            from: -100,
            to: -46,
            color: 'rgba(var(--primary-rgb))'
          }, {
            from: -45,
            to: 0,
            color: 'rgba(var(--primary-rgb))'
          }]
        },
        
      }
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
      position: 'top',
    },
    yaxis: {
      Show: false,
      labels: {
        show: false,
      }
    },
    xaxis: {
      show: false,
      type: 'day',
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      axisBorder: {
        show: false,
        color: 'rgba(119, 119, 142, 0.05)',
        offsetX: 0,
        offsetY: 0,
      },
    }
  };
  cardData:any=[
    {
      id:1,
      cardClass:"overflow-hidden main-content-card",
      customClass:"justify-content-between",
      titleClass:"d-block mb-1",
      svgClass:"avatar avatar-md bg-primary svg-white",
      valueClass:"fs-23 fw-medium mb-1",
      title:"Total Sales",
      value:"15,432",
      graph:"Increased",
      color:"success",
      percentage:"5.1%",
      percentageIcon:"ti ti-trending-up fs-16",
      bg:"primary",
      svg:` <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000"
      viewBox="0 0 256 256">
      <path
          d="M136,120v56a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM239.86,98.11,226,202.12A16,16,0,0,1,210.13,216H45.87A16,16,0,0,1,30,202.12l-13.87-104A16,16,0,0,1,32,80H68.37L122,18.73a8,8,0,0,1,12,0L187.63,80H224a16,16,0,0,1,15.85,18.11ZM89.63,80h76.74L128,36.15ZM224,96H32L45.87,200H210.13Zm-51.16,23.2-5.6,56A8,8,0,0,0,174.4,184a7.44,7.44,0,0,0,.81,0,8,8,0,0,0,7.95-7.2l5.6-56a8,8,0,0,0-15.92-1.6Zm-89.68,0a8,8,0,0,0-15.92,1.6l5.6,56a8,8,0,0,0,8,7.2,7.44,7.44,0,0,0,.81,0,8,8,0,0,0,7.16-8.76Z">
      </path>
  </svg>`
    },
    
    {
      id:2,
     cardClass:"overflow-hidden main-content-card",
      customClass:"justify-content-between",
      titleClass:"d-block mb-1",
      svgClass:"avatar avatar-md bg-primarytint1color  svg-white",
      valueClass:"fs-23 fw-medium mb-1",
      title:"Revenue",
      value:"$245,147",
      graph:"Increased",
      color:"success",
      percentage:"0.6%",
      percentageIcon:"ti ti-trending-up fs-16",
      bg:"primarytint1color ",
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M168,56a8,8,0,0,1,8-8h16V32a8,8,0,0,1,16,0V48h16a8,8,0,0,1,0,16H208V80a8,8,0,0,1-16,0V64H176A8,8,0,0,1,168,56Zm62.56,54.68a103.92,103.92,0,1,1-85.24-85.24,8,8,0,0,1-2.64,15.78A88.07,88.07,0,0,0,40,128a87.62,87.62,0,0,0,22.24,58.41A79.66,79.66,0,0,1,98.3,157.66a48,48,0,1,1,59.4,0,79.66,79.66,0,0,1,36.06,28.75A87.62,87.62,0,0,0,216,128a88.85,88.85,0,0,0-1.22-14.68,8,8,0,1,1,15.78-2.64ZM128,152a32,32,0,1,0-32-32A32,32,0,0,0,128,152Zm0,64a87.57,87.57,0,0,0,53.92-18.5,64,64,0,0,0-107.84,0A87.57,87.57,0,0,0,128,216Z"></path></svg>`
    },
    {
      id:3,
      customClass:"justify-content-between",
      cardClass:"overflow-hidden main-content-card",
      titleClass:"d-block mb-1",
      svgClass:"avatar avatar-md bg-primarytint2color  svg-white",
      valueClass:"fs-23 fw-medium mb-1",
      title:"Average Order Value",
      value:"$120",
      graph:"Decreased",
      color:"danger",
      percentage:"1.08%",
      percentageIcon:"ti ti-trending-down fs-16",
      bg:"primarytint2color ",
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>`
    },
    {
      id:4,
      customClass:"justify-content-between",
      cardClass:"overflow-hidden main-content-card",
      titleClass:"d-block mb-1",
      svgClass:"avatar avatar-md bg-primarytint3color  svg-white",
      valueClass:"fs-23 fw-medium mb-1",
      title:"Total Orders",
      value:"1,25,032",
      graph:"Increased",
      color:"success",
      percentage:"2.3%",
      percentageIcon:"ti ti-trending-up fs-16",
      bg:"primarytint3color ",
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path></svg>`
    }
  ]
  paymentMethods = [
    { iconClass: 'ri-bank-card-line', bgClass: 'primarytint3color', name: 'Credit Card', percentage: '25%' },
    { iconClass: 'ri-paypal-line', bgClass: 'primarytint2color', name: 'PayPal', percentage: '20%' },
    { iconClass: 'ri-visa-line', bgClass: 'primarytint1color', name: 'VISA', percentage: '15%' },
    { iconClass: 'ri-apple-line', bgClass: 'info', name: 'Apple Pay', percentage: '10%' },
    { iconClass: 'ri-google-line', bgClass: 'secondary', name: 'Google Pay', percentage: '10%' }
  ];
   // Array of product objects
   productData = [
    {imgSrc: './assets/images/ecommerce/png/6.png',name: 'Chair with Cushion',category: 'Furniture',price: '$124',sales: '260 Sales',liClass:""},
    {imgSrc: './assets/images/ecommerce/png/7.png',name: 'Hand Bag', category: 'Accessories',price: '$564',sales: '181 Sales', liClass:"mt-4"},
    {imgSrc: './assets/images/ecommerce/png/28.png',name: 'Sneakers', category: 'Sports',price: '$964',sales: '134 Sales', liClass:"mt-4"},
    {imgSrc: './assets/images/ecommerce/png/11.png',name: 'Ron Hoodie', category: 'Fashion',price: '$769',sales: '127 Sales', liClass:"mt-4"},
    {imgSrc: './assets/images/ecommerce/png/23.png',name: 'Smart Watch', category: 'Electronics',price: '$999',sales: '108 Sales', liClass:"mt-4" }
  ];
  activities = [
    { id: 1,title: 'New Order - #12345',description: '2 items purchased by John Doe',iconClass: 'ri-shopping-cart-line',avatarClass: 'bg-primary',timeAgo: '3 hrs ago',},
    {
      id: 2,
      title: 'Order Shipped - #12345',
      description: 'Shipped via FedEx',
      iconClass: 'ri-checkbox-circle-line',
      avatarClass: 'bg-success',
      timeAgo: '1 day ago',
    },
    {
      id: 3,
      title: 'Added New Products',
      description: 'New items added in Fashions',
      iconClass: 'ri-add-circle-line',
      avatarClass: 'bg-primarytint1color ',
      timeAgo: '12 days ago',
      class:"pb-2",
      images:[
        "./assets/images/ecommerce/png/7.png",
        "./assets/images/ecommerce/png/12.png"
      ]
    },
    {
      id: 4,
      title: 'Product Favorited - iPhone 12 Pro',
      description: 'Added to favorites by Jane Smith',
      iconClass: 'ri-heart-3-line',
      avatarClass: 'bg-danger',
      timeAgo: '2 days ago',
    },
    {
      id: 5,
      title: 'Product Rated - Samsung Galaxy S21',
      description: 'Rated 4.5 stars by John Doe',
      iconClass: 'ri-star-line',
      avatarClass: 'bg-warning',
      timeAgo: '3 days ago',
    },
    {
      id: 6,
      title: 'Product Discount - Nike Air Max',
      description: 'Discounted price applied',
      iconClass: 'ri-price-tag-3-line',
      avatarClass: 'bg-info',
      timeAgo: '4 days ago',
    },
    {
      id: 7,
      title: 'Customer Inquiry - Order ID: #12346',
      description: 'Inquiry received from customer',
      iconClass: 'ri-chat-1-line',
      avatarClass: 'bg-secondary',
      timeAgo: '5 days ago',
      liClass:"pb-0"
    },
  ];
}
