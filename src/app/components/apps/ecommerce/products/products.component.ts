import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpkProductCardComponent } from '../../../../../@spk/reusable-apps/spk-product-card/spk-product-card.component';
import * as noUiSlider from 'nouislider';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule,RouterModule,CommonModule,SpkProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  lowerValue: number = 8000;
  upperValue: number = 40000;

  ngAfterViewInit(): void {
    const slider = document.getElementById('nonlinear') as noUiSlider.target; // Correct type is noUiSlider.target

    noUiSlider.create(slider, {
      start: [this.lowerValue, this.upperValue],
      connect: true,
      range: {
        'min': [0],
        'max': [50000]
      }
    });

    const lowerValueElem :any= document.getElementById('lower-value');
    const upperValueElem:any = document.getElementById('upper-value');

    slider.noUiSlider?.on('update', (values: any, handle: any) => {
      if (handle === 0) {
        this.lowerValue = Math.round(values[0] as number);
        lowerValueElem.innerHTML = this.lowerValue.toString();
      } else {
        this.upperValue = Math.round(values[1] as number);
        upperValueElem.innerHTML = this.upperValue.toString();
      }
    });
  }

  products = [
    {
      id: 1,
      title: "Lightweight Sneakers",
      price: "$771",
      originalPrice: "$880",
      imageUrl: "./assets/images/ecommerce/png/28.png",
      discount: "12% Off",
      color1: "primarytint3color ",
      ratingsCount: 874,
      series: "Stealth Series",
      trending: true,
      color: "primary"
    },
    {
      id: 2,
      title: "Kids' Party Wear Frock",
      price: "$236",
      originalPrice: "$267",
      imageUrl: "./assets/images/ecommerce/png/12.png",
      discount: "15% Off",
      color1: "info",
      ratingsCount: 231,
      series: "Twinkle Twirl",
      color: "primary"
    },
    {
      id: 3,
      title: "Ladies' Slim Bag",
      price: "$124",
      originalPrice: "$105",
      imageUrl: "./assets/images/ecommerce/png/29.png",
      discount: "24% Off",
      color1: "primarytint1color",
      ratingsCount: 110,
      series: "Sleek Elegance",
      color: "primary"
    },
    {
      id: 4,
      title: "Elegant Flower Pot",
      price: "$314",
      originalPrice: "$547",
      imageUrl: "./assets/images/ecommerce/png/14.png",
      discount: "60% Off",
      color1: "success",
      ratingsCount: 211,
      series: "Serene Garden",
      color: "primary"
    },
    {
      id: 5,
      title: "Trendy Sunglasses",
      price: "$251",
      originalPrice: "$399",
      imageUrl: "./assets/images/ecommerce/png/11.png",
      discount: "10% Off",
      color1: "primarytint2color",
      ratingsCount: 514,
      series: "Crystal Clear",
      color: "primary"
    },
    {
      id: 6,
      title: "Sleek Modern Chair",
      price: "$314",
      originalPrice: "$547",
      imageUrl: "./assets/images/ecommerce/png/13.png",
      discount: "60% Off",
      color1: "success",
      ratingsCount: 211,
      series: "Artisanal Comfort",
      color: "primary"
    },
    {
      id: 7,
      title: "Advanced Smartwatch",
      price: "$354",
      originalPrice: "$455",
      imageUrl: "./assets/images/ecommerce/png/23.png",
      discount: "15% Off",
      color1: "warning",
      ratingsCount: 225,
      series: "SmartSync 2024",
      trending: true,
      color: "primary "
    },
    {
      id: 8,
      title: "Classic T-shirt",
      price: "$251",
      originalPrice: "$399",
      imageUrl: "./assets/images/ecommerce/png/10.png",
      discount: "50% Off",
      color1: "danger",
      ratingsCount: 142,
      series: "Casual Everyday",
      color: "primary"
    },
    {
      id: 9,
      title: "Versatile Hoodie",
      price: "$251",
      originalPrice: "$399",
      imageUrl: "./assets/images/ecommerce/png/9.png",
      discount: "15% Off",
      color1: "info",
      ratingsCount: 142,
      series: "Urban Flex",
      color: "primary"
    },
    {
      id: 10,
      title: "Wireless Headphones",
      price: "$251",
      originalPrice: "$399",
      imageUrl: "./assets/images/ecommerce/png/30.png",
      discount: "21% Off",
      color1: "primarytint1color",
      ratingsCount: 142,
      series: "SoundWave",
      color: "primary"
    },
    {
      id: 11,
      title: "Wireless Earbuds",
      price: "$314",
      originalPrice: "$547",
      imageUrl: "./assets/images/ecommerce/png/31.png",
      discount: "60% Off",
      color1: "success",
      ratingsCount: 211,
      series: "AirPods Max",
      color: "primary"
    },
    {
      id: 12,
      title: "Trendy Sunglasses",
      price: "$251",
      originalPrice: "$399",
      imageUrl: "./assets/images/ecommerce/png/11.png",
      discount: "10% Off",
      color1: "primarytint2color",
      ratingsCount: 514,
      series: "Crystal Clear",
      color: "primary"
    },


  ];
}