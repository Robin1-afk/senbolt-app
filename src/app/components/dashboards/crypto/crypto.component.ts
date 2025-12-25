import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { SpkCryptoDashboardComponent } from '../../../../@spk/reusable-dashboard/spk-crypto-dashboard/spk-crypto-dashboard.component';
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../shared/shared.module';
;

@Component({
  selector: 'app-crypto',
  standalone: true,
  imports: [SharedModule,SpkCryptoDashboardComponent,NgApexchartsModule,SpkNgSelectComponent,SpkDropdownsComponent,CommonModule,SpkReusableTablesComponent,SpkApexchartsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.scss'
})
export class CryptoComponent {
	@ViewChild('swiperContainer') swiperContainer!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
		  slidesPerView: 1,
		  spaceBetween: 20,
		  loop: true,
		  autoplay: {
			delay: 1000,
			disableOnInteraction: true,
		  },
		 
		  breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			500: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},
			770: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			1400: {
			  slidesPerView: 4,
			  spaceBetween: 20,
			},
			1600: {
				slidesPerView: 5,
				spaceBetween: 20,
			  },
		  },
	  });
	}
	thumbsSwiper: any;
	setThumbsSwiper(swiper: any) {
		this.thumbsSwiper = swiper;
	  }
chartOptions:any={
	series: [{
		data: [{
			x: new Date(1538778600000),
			y: [6629.81, 6650.5, 6623.04, 6633.33],
		}, {
			x: new Date(1538780400000),
			y: [6632.01, 6643.59, 6620, 6630.11],
		}, {
			x: new Date(1538782200000),
			y: [6630.71, 6648.95, 6623.34, 6635.65],
		}, {
			x: new Date(1538784000000),
			y: [6635.65, 6651, 6629.67, 6638.24],
		}, {
			x: new Date(1538785800000),
			y: [6638.24, 6640, 6620, 6624.47],
		}, {
			x: new Date(1538787600000),
			y: [6624.53, 6636.03, 6621.68, 6624.31],
		}, {
			x: new Date(1538789400000),
			y: [6624.61, 6632.2, 6617, 6626.02],
		}, {
			x: new Date(1538791200000),
			y: [6627, 6627.62, 6584.22, 6603.02],
		}, {
			x: new Date(1538793000000),
			y: [6605, 6608.03, 6598.95, 6604.01],
		}, {
			x: new Date(1538794800000),
			y: [6604.5, 6614.4, 6602.26, 6608.02],
		}, {
			x: new Date(1538796600000),
			y: [6608.02, 6610.68, 6601.99, 6608.91],
		}, {
			x: new Date(1538798400000),
			y: [6608.91, 6618.99, 6608.01, 6612],
		}, {
			x: new Date(1538800200000),
			y: [6612, 6615.13, 6605.09, 6612],
		}, {
			x: new Date(1538802000000),
			y: [6612, 6624.12, 6608.43, 6622.95],
		}, {
			x: new Date(1538803800000),
			y: [6623.91, 6623.91, 6615, 6615.67],
		}, {
			x: new Date(1538805600000),
			y: [6618.69, 6618.74, 6610, 6610.4],
		}, {
			x: new Date(1538807400000),
			y: [6611, 6622.78, 6610.4, 6614.9],
		}, {
			x: new Date(1538809200000),
			y: [6614.9, 6626.2, 6613.33, 6623.45],
		}, {
			x: new Date(1538811000000),
			y: [6623.48, 6627, 6618.38, 6620.35],
		}, {
			x: new Date(1538812800000),
			y: [6619.43, 6620.35, 6610.05, 6615.53],
		}, {
			x: new Date(1538814600000),
			y: [6615.53, 6617.93, 6610, 6615.19],
		}, {
			x: new Date(1538816400000),
			y: [6615.19, 6621.6, 6608.2, 6620],
		}, {
			x: new Date(1538818200000),
			y: [6619.54, 6625.17, 6614.15, 6620],
		}, {
			x: new Date(1538820000000),
			y: [6620.33, 6634.15, 6617.24, 6624.61],
		}, {
			x: new Date(1538821800000),
			y: [6625.95, 6626, 6611.66, 6617.58],
		}, {
			x: new Date(1538823600000),
			y: [6619, 6625.97, 6595.27, 6598.86],
		}, {
			x: new Date(1538825400000),
			y: [6598.86, 6598.88, 6570, 6587.16],
		}, {
			x: new Date(1538827200000),
			y: [6588.86, 6600, 6580, 6593.4],
		}, {
			x: new Date(1538829000000),
			y: [6593.99, 6598.89, 6585, 6587.81],
		}, {
			x: new Date(1538830800000),
			y: [6587.81, 6592.73, 6567.14, 6578],
		}, {
			x: new Date(1538832600000),
			y: [6578.35, 6581.72, 6567.39, 6579],
		}, {
			x: new Date(1538834400000),
			y: [6579.38, 6580.92, 6566.77, 6575.96],
		}, {
			x: new Date(1538836200000),
			y: [6575.96, 6589, 6571.77, 6588.92],
		}, {
			x: new Date(1538838000000),
			y: [6588.92, 6594, 6577.55, 6589.22],
		}, {
			x: new Date(1538839800000),
			y: [6589.3, 6598.89, 6589.1, 6596.08],
		}, {
			x: new Date(1538841600000),
			y: [6597.5, 6600, 6588.39, 6596.25],
		}, {
			x: new Date(1538843400000),
			y: [6598.03, 6600, 6588.73, 6595.97],
		}, {
			x: new Date(1538845200000),
			y: [6595.97, 6602.01, 6588.17, 6602],
		}, {
			x: new Date(1538847000000),
			y: [6602, 6607, 6596.51, 6599.95],
		}, {
			x: new Date(1538848800000),
			y: [6600.63, 6601.21, 6590.39, 6591.02],
		}, {
			x: new Date(1538850600000),
			y: [6591.02, 6603.08, 6591, 6591],
		}, {
			x: new Date(1538852400000),
			y: [6591, 6601.32, 6585, 6592],
		}, {
			x: new Date(1538854200000),
			y: [6593.13, 6596.01, 6590, 6593.34],
		}, {
			x: new Date(1538856000000),
			y: [6593.34, 6604.76, 6582.63, 6593.86],
		}, {
			x: new Date(1538857800000),
			y: [6593.86, 6604.28, 6586.57, 6600.01],
		}, {
			x: new Date(1538859600000),
			y: [6601.81, 6603.21, 6592.78, 6596.25],
		}, {
			x: new Date(1538861400000),
			y: [6596.25, 6604.2, 6590, 6602.99],
		}, {
			x: new Date(1538863200000),
			y: [6602.99, 6606, 6584.99, 6587.81],
		}, {
			x: new Date(1538865000000),
			y: [6587.81, 6595, 6583.27, 6591.96],
		}, {
			x: new Date(1538866800000),
			y: [6591.97, 6596.07, 6585, 6588.39],
		}, {
			x: new Date(1538868600000),
			y: [6587.6, 6598.21, 6587.6, 6594.27],
		}, {
			x: new Date(1538870400000),
			y: [6596.44, 6601, 6590, 6596.55],
		}, {
			x: new Date(1538872200000),
			y: [6598.91, 6605, 6596.61, 6600.02],
		}, {
			x: new Date(1538874000000),
			y: [6600.55, 6605, 6589.14, 6593.01],
		}, {
			x: new Date(1538875800000),
			y: [6593.15, 6605, 6592, 6603.06],
		}, {
			x: new Date(1538877600000),
			y: [6603.07, 6604.5, 6599.09, 6603.89],
		}, {
			x: new Date(1538879400000),
			y: [6604.44, 6604.44, 6600, 6603.5],
		}, {
			x: new Date(1538881200000),
			y: [6603.5, 6603.99, 6597.5, 6603.86],
		}, {
			x: new Date(1538883000000),
			y: [6603.85, 6605, 6600, 6604.07],
		}, {
			x: new Date(1538884800000),
			y: [6604.98, 6606, 6604.07, 6606],
		}, {
			x: new Date(1538868600000),
			y: [6587.6, 6598.21, 6587.6, 6594.27],
		}, {
			x: new Date(1538870400000),
			y: [6596.44, 6601, 6590, 6596.55],
		}, {
			x: new Date(1538872200000),
			y: [6598.91, 6605, 6596.61, 6600.02],
		},{
			x: new Date(1538778600000),
			y: [6629.81, 6650.5, 6623.04, 6633.33],
		}, {
			x: new Date(1538780400000),
			y: [6632.01, 6643.59, 6620, 6630.11],
		}, {
			x: new Date(1538782200000),
			y: [6630.71, 6648.95, 6623.34, 6635.65],
		}, {
			x: new Date(1538784000000),
			y: [6635.65, 6651, 6629.67, 6638.24],
		}, {
			x: new Date(1538785800000),
			y: [6638.24, 6640, 6620, 6624.47],
		}, ],
	}, ],
	chart: {
		type: "candlestick",
		borderRadius: 20,
		height: 365,
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false
		  },
	},
	plotOptions: {
		candlestick: {
			colors: {
				upward: "rgb(227, 84, 212)",
				downward: "rgba(var(--primary-rgb))",
					},
				}
	},
	title: {
		align: "left",
	},
	grid: {
		borderColor: "#f1f1f1",
		strokeDashArray: 3,
	},
	xaxis: {
		type: "datetime",
		axisBorder: {
			show: false,
			color: "rgba(119, 119, 142, 0.05)",
			offsetX: 0,
			offsetY: 0,
		},
		axisTicks: {
			show: false,
			borderType: "solid",
			color: "rgba(119, 119, 142, 0.05)",
			width: 6,
			offsetX: 0,
			offsetY: 0,
		},
	},
	yaxis: {
		tooltip: {
			enabled: true,
		},
	},
}
chartOptions1:any={
	series: [85, 75],
	chart: {
		height: 250,
		type: 'radialBar',
	},
	plotOptions: {
		radialBar: {
			offsetY: 0,
			startAngle: 0,
			endAngle: 360,
			hollow: {
				margin: 5,
				size: '45%',
				background: '#000000',
				image: undefined,
			},
			dataLabels: {
				name: {
					show: true,
					fontSize: '20px',
					fontFamily: "Poppins, sans-serif",
					offsetY: 0
				},
				value: {
					show: true,
					fontSize: '22px',
					color: undefined,
					offsetY: 12,
					fontWeight: 600,
					fontFamily: "Poppins, sans-serif",
					formatter: function (val:any) {
						return val + "%"
					}
				},
				total: {
					show: true,
					showAlways: true,
					label: 'Balance',
					fontSize: '14px',
					fontWeight: 400,
					formatter: function () {
						return 254
					}
				}
			}
		}
	},
	stroke: {
		lineCap: 'round'
	},
	grid: {
		padding: {
			bottom: -10,
			top: -10
		}
	},
	colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 0.7)"],
	labels: ['Funding', 'Trading'],
}
chartOptions2:any={
	chart: {
		type: "line",
		height: 20,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "#000",
			opacity: 0.1,
		},
	},
	series: [{
		name: "Value",
		data: [
			0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
			61, 27, 54, 43, 19, 46,
		],
	}, ],
	colors: ["rgb(227, 84, 212)"],
	stroke: {
		show: true,
		curve: "smooth",
		lineCap: "butt",
		colors: undefined,
		width: 1.7,
		dashArray: 0,
	},
	fill: {
		gradient: {
			enabled: false,
		},
	},
	tooltip: {
		enabled: false,
	},

	yaxis: {
		min: 0,
		show: false,
    axisBorder: {
			show: false,
		},
	},
	xaxis: {
		axisBorder: {
			show: false,
		},
	},
	
}
chartOptions3:any={
	series: [{
		name: "Value",
		data: [
			0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 31,
			37, 39, 62, 51, 35, 41,
		],
	}, ],
  chart: {
		type: "line",
		height: 20,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "#000",
			opacity: 0.1,
		},
	},
  colors: ["rgb(255, 93, 159)"],
  stroke: {
	show: true,
	curve: "smooth",
	lineCap: "butt",
	colors: undefined,
	width: 1.7,
	dashArray: 0,
},
fill: {
	gradient: {
		enabled: false,
	},
},
tooltip: {
	enabled: false,
},

yaxis: {
	min: 0,
	show: false,
axisBorder: {
		show: false,
	},
},
xaxis: {
	axisBorder: {
		show: false,
	},
},
}
chartOptions4:any={
	chart: {
		type: "line",
		height: 20,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "#000",
			opacity: 0.1,
		},
	},
  series: [{
		name: "Value",
		data: [
			61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27,
			93, 53, 62, 51, 35, 41,
		],
	}, ],
  colors: ["rgb(255, 142, 111)"],
  stroke: {
	show: true,
	curve: "smooth",
	lineCap: "butt",
	colors: undefined,
	width: 1.7,
	dashArray: 0,
},
fill: {
	gradient: {
		enabled: false,
	},
},
tooltip: {
	enabled: false,
},

yaxis: {
	min: 0,
	show: false,
axisBorder: {
		show: false,
	},
},
xaxis: {
	axisBorder: {
		show: false,
	},
},
}
chartOptions5:any={
	series: [{
		name: "Value",
		data: [
			61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 37, 39, 0, 45,
			54, 38, 62, 51, 35, 41,
		],
	}, ],
  chart: {
		type: "line",
		height: 20,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "#000",
			opacity: 0.1,
		},
	},
  colors: ["rgb(158, 92, 247)"],
  stroke: {
	show: true,
	curve: "smooth",
	lineCap: "butt",
	colors: undefined,
	width: 1.7,
	dashArray: 0,
},
fill: {
	gradient: {
		enabled: false,
	},
},
tooltip: {
	enabled: false,
},

yaxis: {
	min: 0,
	show: false,
axisBorder: {
		show: false,
	},
},
xaxis: {
	axisBorder: {
		show: false,
	},
},
}
chartOptions6:any={
  chart: {
		type: "line",
		height: 20,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "#000",
			opacity: 0.1,
		},
	},
  series: [{
		name: "Value",
		data: [
			61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43, 19, 56, 24, 65,
			35, 27, 93, 53, 46, 31,
		],
	}, ],
  colors: ["rgb(46, 204, 113)"],
  stroke: {
	show: true,
	curve: "smooth",
	lineCap: "butt",
	colors: undefined,
	width: 1.7,
	dashArray: 0,
},
fill: {
	gradient: {
		enabled: false,
	},
},
tooltip: {
	enabled: false,
},

yaxis: {
	min: 0,
	show: false,
axisBorder: {
		show: false,
	},
},
xaxis: {
	axisBorder: {
		show: false,
	},
},
  
}
chartOptions7:any={
	chart: {
		type: "line",
		height: 20,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "#000",
			opacity: 0.1,
		},
	},
  series: [{
		name: "Value",
		data: [
			62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 61, 27, 54,
			37, 39, 0, 45, 54, 38,
		],
	}, ],
  colors: ["rgb(255, 198, 88)"],
  stroke: {
	show: true,
	curve: "smooth",
	lineCap: "butt",
	colors: undefined,
	width: 1.7,
	dashArray: 0,
},
fill: {
	gradient: {
		enabled: false,
	},
},
tooltip: {
	enabled: false,
},

yaxis: {
	min: 0,
	show: false,
axisBorder: {
		show: false,
	},
},
xaxis: {
	axisBorder: {
		show: false,
	},
},
  
}
chartOptions8:any={
  chart: {
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false
    }
  },
  tooltip: {
    enabled: false,
  },
  series: [{
    name: 'Value',
    data: [61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 62, 51, 35, 41]
  }],
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },

  colors: ['#26bf94'],
  
}
chartOptions9:any={
  chart: {
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false
    }
  },
  tooltip: {
    enabled: false,
  },
  series: [{
    name: 'Value',
    data: [61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41]
  }],
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  
  colors: ['#26bf94'],
  
}
chartOptions10:any={
  chart: {
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false
    }
  },
  tooltip: {
    enabled: false,
  },
  series: [{
    name: 'Value',
    data: [61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31]
  }],
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },

  colors: ['#e6533c'],

  
}
chartOptions11:any={
  chart: {
    type: 'line',
    height: 20,
    width: 120,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false
    }
  },
  tooltip: {
    enabled: false,
  },
  series: [{
    name: 'Value',
    data: [62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 61, 27, 54, 37, 39, 0, 45, 54, 38]
  }],
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: ['#e6533c'],
  
}
chartOptions12:any={
	chart: {
		type: "line",
		height: 40,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "rgb(227, 84, 212)",
			opacity: 0.3,
		},
	},
	grid: {
		show: false,
		xaxis: {
			lines: {
				show: false,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
	stroke: {
		show: true,
		curve: "smooth",
		lineCap: "butt",
		colors: undefined,
		width: 2,
		dashArray: 0,
	},
	fill: {
		gradient: {
			enabled: false,
		},
	},
	series: [{
		name: "Value",
		data: [5, 4, 3, 8, 5, 6, 3, 8, 6, 9, 5, 7, 3, 8],
	}, ],
	yaxis: {
		min: 0,
		show: false,
		axisBorder: {
			show: false,
		},
	},
	xaxis: {
		show: false,
		axisTicks: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
	},
	colors: ["rgb(227, 84, 212)"],
}
chartOptions13:any={
	chart: {
		type: "line",
		height: 40,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "rgba(var(--primary-rgb))",
			opacity: 0.3,
		},
	},
	grid: {
		show: false,
		xaxis: {
			lines: {
				show: false,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
	stroke: {
		show: true,
		curve: "smooth",
		lineCap: "butt",
		colors: undefined,
		width: 1.7,
		dashArray: 0,
	},
	fill: {
		gradient: {
			enabled: false,
		},
	},
	series: [{
		name: "Value",
		data: [5, 4, 3, 8, 5, 6, 3, 8, 6, 9, 5, 7, 3, 8],
	}, ],
	yaxis: {
		min: 0,
		show: false,
		axisBorder: {
			show: false,
		},
	},
	xaxis: {
		show: false,
		axisTicks: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
	},
	colors: ["rgb(255, 93, 159)"],
}
chartOptions14:any={
	chart: {
		type: "line",
		height: 40,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "rgb(158, 92, 247)",
			opacity: 0.3,
		},
	},
	grid: {
		show: false,
		xaxis: {
			lines: {
				show: false,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
	stroke: {
		show: true,
		curve: "smooth",
		lineCap: "butt",
		colors: undefined,
		width: 1.7,
		dashArray: 0,
	},
	fill: {
		gradient: {
			enabled: false,
		},
	},
	series: [{
		name: "Value",
		data: [5, 4, 3, 8, 5, 6, 3, 8, 6, 9, 5, 7, 3, 8],
	}, ],
	yaxis: {
		min: 0,
		show: false,
		axisBorder: {
			show: false,
		},
	},
	xaxis: {
		show: false,
		axisTicks: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
	},
	colors: ["rgb(158, 92, 247)"],
}
chartOptions15:any={
	chart: {
		type: "line",
		height: 40,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "rgb(255, 198, 88)",
			opacity: 0.3,
		},
	},
	grid: {
		show: false,
		xaxis: {
			lines: {
				show: false,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
	stroke: {
		show: true,
		curve: "smooth",
		lineCap: "butt",
		colors: undefined,
		width: 1.7,
		dashArray: 0,
	},
	fill: {
		gradient: {
			enabled: false,
		},
	},
	series: [{
		name: "Value",
		data: [5, 4, 3, 8, 5, 6, 3, 8, 6, 9, 5, 7, 3, 8],
	}, ],
	yaxis: {
		min: 0,
		show: false,
		axisBorder: {
			show: false,
		},
	},
	xaxis: {
		show: false,
		axisTicks: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
	},
	colors: ["rgb(255, 198, 88)"],
}
chartOptions16:any={
	chart: {
		type: "line",
		height: 40,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "rgb(255, 142, 111)",
			opacity: 0.3,
		},
	},
	grid: {
		show: false,
		xaxis: {
			lines: {
				show: false,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
	stroke: {
		show: true,
		curve: "smooth",
		lineCap: "butt",
		colors: undefined,
		width: 1.7,
		dashArray: 0,
	},
	fill: {
		gradient: {
			enabled: false,
		},
	},
	series: [{
		name: "Value",
		data: [5, 4, 3, 8, 5, 6, 3, 8, 6, 9, 5, 7, 3, 8],
	}, ],
	yaxis: {
		min: 0,
		show: false,
		axisBorder: {
			show: false,
		},
	},
	xaxis: {
		show: false,
		axisTicks: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
	},
	colors: ["rgb(255, 142, 111)"],
}
chartOptions17:any={
	chart: {
		type: "line",
		height: 40,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "rgb(255, 93, 159)",
			opacity: 0.3,
		},
	},
	grid: {
		show: false,
		xaxis: {
			lines: {
				show: false,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
	stroke: {
		show: true,
		curve: "smooth",
		lineCap: "butt",
		colors: undefined,
		width: 1.7,
		dashArray: 0,
	},
	fill: {
		gradient: {
			enabled: false,
		},
	},
	series: [{
		name: "Value",
		data: [5, 4, 3, 8, 5, 6, 3, 8, 6, 9, 5, 7, 3, 8],
	}, ],
	yaxis: {
		min: 0,
		show: false,
		axisBorder: {
			show: false,
		},
	},
	xaxis: {
		show: false,
		axisTicks: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
	},
	colors: ["rgb(255, 93, 159)"],
}
chartOptions18:any={
	chart: {
		type: "line",
		height: 40,
		width: 120,
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 3,
			color: "rgb(227, 84, 212)",
			opacity: 0.3,
		},
	},
	grid: {
		show: false,
		xaxis: {
			lines: {
				show: false,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
	stroke: {
		show: true,
		curve: "smooth",
		lineCap: "butt",
		colors: undefined,
		width: 2,
		dashArray: 0,
	},
	fill: {
		gradient: {
			enabled: false,
		},
	},
	series: [{
		name: "Value",
		data: [5, 4, 3, 8, 5, 6, 3, 8, 6, 9, 5, 7, 3, 8],
	}, ],
	yaxis: {
		min: 0,
		show: false,
		axisBorder: {
			show: false,
		},
	},
	xaxis: {
		show: false,
		axisTicks: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
	},
	colors: ["rgb(158, 92, 247)"],
}
portfolio=[
	{ header: '#', field: '#' },
	{ header: 'Coin', field: 'coin' },
	{ header: 'Price', field: 'price' },
	{ header: 'Price Graph', field: 'pricegraph' },
	{ header: '24h Volume', field: 'volume' },
	{ header: '24h Change', field: 'change' },
	{ header: 'Market Cap', field: 'marketcap' },
	{ header: 'Actions', field: 'actions' },
]
cryptos = [
	{
	  id: 1,
	  name: 'Bitcoin - BTC',
	  image: './assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg',
	  price: '$34,283.53',
	  volume: '21,457.02M',
	  change: { value: 39.23, direction: 'up' },
	  marketCap: '$669,649,033,571',
	  chartOptions: this.chartOptions2,
	},
	{
	  id: 2,
	  name: 'Etherium - ETH',
	  image: './assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg',
	  price: '$1,800.81',
	  volume: '11,784.22M',
	  change: { value: 58.63, direction: 'down' },
	  marketCap: '$216,466,869,907',
	  chartOptions: this.chartOptions3,
	},
	{
		id: 3,
		name: 'Tether - USDT',
		image: './assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg',
		price: '$1.00',
		volume: '33,874.25M',
		change: { value: 49.30, direction: 'up' },
		marketCap: '$84,641,938,780',
		chartOptions: this.chartOptions4,
	  },
	  {
		id: 4,
		name: 'Solana - SOL',
		image: './assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg',
		price: '$35.97',
		volume: '33,749.56M',
		change: { value: 144.58, direction: 'down' },
		marketCap: '$15,083,616,607',
		chartOptions: this.chartOptions5,
	  },
	  {
		id: 5,
		name: 'Cardano - ADA',
		image: './assets/images/crypto-currencies/crypto-icons/cardano-ada-logo.svg',
		price: '$0.3008',
		volume: '89,554.62M',
		change: { value: 51.5, direction: 'down' },
		marketCap: '$10,600,249,889',
		chartOptions: this.chartOptions6,
	  },
	  {
		id: 6,
		name: 'Binance - BNB',
		image: './assets/images/crypto-currencies/crypto-icons/binance-usd-busd-logo.svg',
		price: '$227.36',
		volume: '65,547.15M',
		change: { value: 25.85, direction: 'up' },
		marketCap: '$34,488,924,548',
		chartOptions: this.chartOptions7,
	  },
	// Add other cryptocurrencies here...
  ];
  constructor(private sanitizer: DomSanitizer) {}
  svg!: SafeHtml; 
  sanitizeIcon(svg: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  marketCapItems = [
    {
      name: 'Bitcoin',
      ticker: 'BTC',
      marketCap: '$15 B',
      price: '$18,907.01',
      change: '+1,30.90',
      percentageChange: '2.9%',
      icon: 'primary', // class for styling icon
      trend: 'success', // text-success for up or text-danger for down
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path><path fill="#fff" d="M94.3 71.4c-.5-3.6-2.3-6.4-5.4-8.2-1.4-.8-3.1-1.4-4.7-2.1.2-.1.3-.3.4-.3 7.9-4.1 7.2-16.3 1.5-20.5-2.3-1.7-4.9-2.8-7.7-3.4-2-.4-3.9-.7-6-1.1 0-3.5.1-8.5.1-12.4H65c0 3.8-.1 8.7-.1 12.1H59c0-3.5 0-8.3.1-12.1h-7.4c0 4-.1 8.8-.1 12.3-5.1 0-10-.1-15-.1 0 2.7 0 5.3-.1 7.9h3c.9 0 1.9 0 2.8.1 2.6.2 3.9 1.6 3.9 4.2l-.3 31.9c0 2.3-1 3.3-3.3 3.3h-5c-.5 3-1 5.9-1.6 8.9 5 .1 10 .1 15 .2 0 3.8 0 8.7-.1 12.7h7.4c0-4 .1-8.7.1-12.5 2.1.1 4 .1 5.9.2 0 3.8-.1 8.4-.1 12.3h7.4c0-4 .1-8.7.1-12.4.3 0 .5-.1.6-.1 3.5-.6 7.2-.9 10.6-1.7 4.5-1.1 8.1-3.7 9.9-8.2 1.7-3.6 2-7.2 1.5-11zM59 44.3c4.6 0 9.1-.4 13.4 1.5 2.8 1.2 4.2 3.5 4 6.3-.2 2.9-1.9 5-4.8 6-4.1 1.3-8.3 1.3-12.7 1.1 0-5 .1-9.8.1-14.9zm16.2 37.1c-4.1 1.8-8.5 1.8-12.8 1.9-1.2 0-2.4-.1-3.8-.1.1-5.5.1-10.9.2-16.4 5.6 0 11.2-.4 16.5 1.9 2.7 1.2 4.3 3.3 4.3 6.4 0 3.1-1.6 5.1-4.4 6.3z"></path></svg>`, // insert the appropriate SVG path
      directionIcon: 'ti-arrow-narrow-up', // Use arrow up/down class based on percentage change
    },
    {
      name: 'Ethereum',
      ticker: 'ETH',
      marketCap: '$11 B',
      price: '$15,135.25',
      change: '+1,07.09',
      percentageChange: '3.0%',
      icon: 'secondary',
      trend: 'success',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path><path fill="#fff" d="M65.2 87.2v22.7l28.1-39.5zM92.3 63.1l-27.1-45v32.7zM65.2 53.3v28l26.9-15.7zM35.8 63.1l27-45v32.7zM62.8 53.3v28L35.9 65.6zM62.8 87.2v22.7L34.7 70.4z"></path></svg>`,
      directionIcon: 'ti-arrow-narrow-up',
    },
    {
      name: 'Dash',
      ticker: 'DASH',
      marketCap: '$23 B',
      price: '$15,176.46',
      change: '-1,8.01',
      percentageChange: '0.1%',
      icon: 'success',
      trend: 'danger',
	  svg:`<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path><path fill="#fff" d="M20.8 89.3c1.4-4.1 2.7-7.9 4.1-11.8.1-.4.9-.7 1.3-.7 2.3-.1 4.7 0 7 0H79c1.2 0 1.8-.4 2.1-1.5 2.5-7.5 5.2-15 7.8-22.5.1-.4.2-.8.4-1.4H33.8c1.4-4.2 2.8-8.1 4.1-12 .1-.3.7-.6 1.1-.6 1.4-.1 2.8 0 4.2 0 18.8 0 37.6.1 56.3-.1 5.6-.1 11.6 4.3 9.2 12.5-1.8 6.1-4.1 12.1-6.2 18.2-.7 2.1-1.4 4.1-2.1 6.2-2.6 7.2-7.9 11.6-15.2 13.6-.7.2-1.4.2-2.1.2H22.3c-.4-.1-.8-.1-1.5-.1z"></path><path fill="#fff" d="M55.9 58.1c-1.4 4-2.8 7.7-4.2 11.4-.1.3-.7.5-1 .5H19.2c-.1 0-.3-.1-.6-.2 1.3-3.7 2.6-7.3 4-10.9.1-.3.7-.7 1-.7 10.7-.1 21.4-.1 32.3-.1z"></path></svg>`,
      directionIcon: 'ti-arrow-narrow-down',
    },
    {
      name: 'Golem',
      ticker: 'GLM',
      marketCap: '$2 B',
      price: '$11,576.1',
      change: '+1,67.08',
      percentageChange: '0.03%',
      icon: 'warning',
	  trend: 'success',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path><path fill="#fff" d="M63.8 22.6c3.7-.1 7.2.6 10.2 2.7 1.4.9 2.4.8 3.6-.5 2.4-2.6 5-5 7.5-7.6.9-.9 1.8-1.5 2.9-.2 1.1 1.1.8 2-.2 2.9-2.6 2.6-5 5.2-7.6 7.8-1.1 1.1-1.3 1.9-.5 3.3 5.8 10.4 2.9 22.5-8.6 28.1-1.1.5-2.3.8-3.5 1-1.4.3-1.9 1-1.9 2.5.1 3 .1 6 0 8.9 0 1.6.5 2.3 2.1 2.7 6.2 1.5 10.6 5.2 13.3 10.9 2.6 5.5 1.9 15.4-3.8 21.3-4.8 4.9-13.2 6.9-19.5 4.4-7.5-3-12.1-9.6-12.2-17.5-.1-9.6 5.1-16.4 14.3-19 1.4-.4 2.2-1 2.1-2.5-.1-3.4 0-6.8-.2-10.2 0-.6-1.1-1.4-1.8-1.6-6-1.6-10.4-5.2-12.9-10.8-5.6-13 4.3-27.4 16.7-26.6zM79 92.8c0-7.9-6.9-15.1-14.5-15.1-8-.1-15.3 7-15.4 15-.1 7.9 7.3 15.6 14.9 15.5 8.1-.1 15-7.2 15-15.4zM49.3 41.1c0 8.6 6.6 15.6 14.9 15.6 7.7 0 14.8-7.1 14.8-15.1 0-7.4-5.5-15.2-14.7-15-8.4.1-14.9 6.3-15 14.5z"></path></svg>`,
      directionIcon: 'ti-arrow-narrow-up',
    },
    {
      name: 'Litecoin',
      ticker: 'LTC',
      marketCap: '$13 B',
      price: '$16,581.81',
      change: '-1,01.05',
      percentageChange: '3.8%',
      icon: 'info',
      trend: 'danger',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path><path fill="#fff" d="M59.5 87.6l5-19 11.9-4.4 3-11.2-.1-.2-11.7 4.3L76 25.2H52L40.9 66.8l-9.2 3.4-3.1 11.5 9.3-3.4-6.6 24.5h64l4.1-15.2z"></path></svg>`,
      directionIcon: 'ti-arrow-narrow-down',
    },
    {
      name: 'Augur',
      ticker: 'REP',
      marketCap: '$10 B',
      price: '$10,107.51',
      change: '+1,10.30',
      percentageChange: '1.89%',
      icon: 'danger',
      trend: 'success',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path><path fill="#fff" d="M63.9 111.8c-.9-.4-1.7-.7-2.4-1.1-11.8-7-23.7-14.1-35.5-21.2-2.7-1.6-3.2-3.2-1.6-6.1 12-21.5 24-43 35.9-64.5.8-1.5 1.8-2.6 3.6-2.6s2.8 1.2 3.6 2.7c11.9 21.4 23.9 42.9 35.8 64.3 1.6 2.9 1.2 4.5-1.6 6.2l-35.1 21c-.8.5-1.8.9-2.7 1.3zm-4.2-22.2c-2.8-1.7-5.5-3.3-8.2-4.9-2-1.2-3.9-2.6-5.9-3.8-.8-.5-2-.9-2.9-.6-4.9 1.4-9.4 3.9-14 6.8 11.3 6.7 22.2 13.3 33.4 20 0-4.5.1-8.6 0-12.7-.1-2.5.9-4.5 2.6-6.1 1.2-1.1 2.6-2.1 4-2.8 4-1.9 7.2-4.5 9-8.9.8 1.3 1.5 2.3 2.2 3.4-1.9 3.5-4.7 6-8.1 7.8-1.6.8-3.1 1.8-4.5 2.9-.7.6-1.6 1.6-1.6 2.4-.2 4.5-.1 9.1-.1 14 11.2-6.7 22-13.2 33.3-19.9-4.4-2.2-8.4-4.3-12.4-6.2-2.9-1.4-4.9-3.4-6.1-6.3-.8-2-1.5-4.1-2.1-6.3-1.5-5.8-5-9.6-10.8-11.3-.6-.2-1.3-.3-2-.5 2.4-3.4 2.4-3.4 5.9-1.8 5.3 2.5 8.9 6.6 10.1 12.3 1.2 6 3.8 10.5 9.9 12.5 1.6.5 3.1 1.5 4.6 2.3.9.4 1.7.8 2.6 1.2.1-.1.2-.2.3-.4-10.8-19.6-21.8-39.2-32.7-58.8-.2 0-.4.1-.6.1v2.2c0 7-.2 14 .1 21 .1 4.1-1.5 6.8-4.8 8.9-1.2.8-2.4 1.5-3.7 2.1-4 2-6.7 5.2-7.6 9.5-.5 2.4-.4 4.9-.5 7.3-3.7-1.1-3.7-1.1-3.4-5.1.6-6.8 4.1-11.7 10-15 1.6-.9 3.3-1.7 4.6-3 .9-.9 1.7-2.4 1.7-3.7.2-7.7.1-15.4.1-23.2 0-.4-.1-.9-.3-1.7-11 20-21.8 39.4-32.9 59.2 3.8-1.8 7.2-3.3 10.6-4.9 2.8-1.3 5.6-1.1 8.2.3 1.7.9 3.4 1.8 4.9 3.1 2.8 2.5 5.8 4.5 9.8 5-.9 1.2-1.6 2.1-2.7 3.6z"></path></svg>`,
      directionIcon: 'ti-arrow-narrow-up',
    }
  ];
  transactionColumns=[
	{ header: 'Cryptocurrency', field: 'cryptocurrency' },
	{ header: 'Action', field: 'action' },
	{ header: 'Date & Time', field: 'date' },
	{ header: 'Change', field: 'change' },
  ]
  transactions=[
	{
		src:"./assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg",
		bg:"primarytint3color/10",
		bg1:"success",
		coin:"Bitcoin",
		crypto:"BTC",
		action:"Deposited",
		date:"12 Apr, 2024 13:12",
		change:"+ 25,00 BTC",
		arrow:"up"
	},
	{
		src:"./assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
		bg:"gray-200",
		bg1:"danger",
		coin:"Ethereum",
		crypto:"ETH",
		action:"Withdraw",
		date:"20 Apr, 2024 08:14",
		change:"- 25,00 ETH",
		arrow:"down"
	},
	{
		src:"./assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg",
		bg:"primarytint3color/10",
		bg1:"success",
		coin:"Bitcoin",
		crypto:"BTC",
		action:"Buy",
		date:"12 Apr, 2024 16:37",
		change:"+ 25,00 BTC",
		arrow:"up"
	},
	{
		src:"./assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg",
		bg:"success-transparent",
		bg1:"success",
		coin:"Tether",
		crypto:"USDT",
		action:"Convert",
		date:"12 Apr, 2024 11:45",
		change:"+ $610,539 USDT",
		arrow:"up"
	},
	{
		src:"./assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
		bg:"gray-200",
		bg1:"danger",
		coin:"Ethereum",
		crypto:"ETH",
		action:"Deposited",
		date:"20 Apr, 2024 08:55",
		change:"- 25,00 ETH",
		arrow:"down"
	},
  ]
  Crypto=[
    {label:'BTC',value:1},
    {label:'ETH',value:2},
    {label:'XRP',value:3},
    {label:'DASH',value:4},
    {label:'NEO',value:5},  
    {label:'LTC',value:6},
    {label:'BSD',value:7},
  ]
  Crypto1=[
    {label:'USD',value:1},
    {label:'AED',value:2},
    {label:'AUD',value:3},
    {label:'ARS',value:4},
    {label:'AZN',value:5},  
    {label:'BGN',value:6},
    {label:'BRL',value:7},
  ]
  handleSelectChange(value: any | any[]) {
}
cryptoList = [
    {
		id:'btc',
        name: "Bitcoin",
        symbol: "BTC",
		logoclass:'',
        value: "134.56",
        price: "$18,574.58 USD",
        change: "+0.57%",
        changeType: "text-success",
        imgSrc: "./assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg",
        chartOptions: this.chartOptions12,
    },
    {
		id:'bnb',
        name: "Binance",
        symbol: "BNB",
        value: "578.05",
        price: "$26,478.09 USD",
        change: "-0.12%",
        changeType: "text-danger",
        imgSrc: "./assets/images/crypto-currencies/crypto-icons/binance-usd-busd-logo.svg",
        chartOptions: this.chartOptions13,
		logoclass:'',
    },
    {
		id:'ada',
        name: "Cardano",
        symbol: "ADA",
        value: "324.06",
        price: "$13,124.02 USD",
        change: "+0.12%",
        changeType: "text-success",
        imgSrc: "./assets/images/crypto-currencies/crypto-icons/cardano-ada-logo.svg",
        chartOptions:  this.chartOptions14,
		logoclass:'',
    },
    {
		id:'eth',
        name: "Ethereum",
        symbol: "ETH",
        value: "245.15",
        price: "$27,684.05 USD",
        change: "+0.15%",
        changeType: "text-success",
        imgSrc: "./assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg",
        chartOptions: this.chartOptions15,
		logoclass:'',
    },
    {
		id:'usdt',
        name: "Tether",
        symbol: "USDT",
        value: "297.01",
        price: "$26,478.09 USD",
        change: "+1.15%",
        changeType: "text-success",
        imgSrc: "./assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg",
        chartOptions: this.chartOptions16,
		logoclass:'',
    },
    {
		id:'xrp',
        name: "Ripple",
        symbol: "XRP",
        value: "789.45",
        price: "$14,872.03 USD",
        change: "-0.16%",
        changeType: "text-danger",
        imgSrc: "./assets/images/crypto-currencies/crypto-icons/xrp-xrp-logo.svg",
        chartOptions: this.chartOptions17,
		logoclass:'xrp-logo',
    },
    {
        name: "Solana",
        symbol: "SOL",
		id:'sol',
        value: "245.15",
        price: "$18,784.05 USD",
        change: "+0.15%",
        changeType: "text-success",
        imgSrc: "./assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg",
        chartOptions: this.chartOptions18,
		logoclass:'',
    },
];
}
