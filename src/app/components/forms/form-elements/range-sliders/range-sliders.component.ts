import { AfterViewInit,Component,ViewChild,ElementRef } from '@angular/core';
import * as noUiSlider from 'nouislider';
import * as prismCodeData from '../../../../shared/prismData/forms'
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';
import { SharedModule } from '../../../../shared/shared.module';
import { NouisliderModule } from 'ng2-nouislider';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

interface SimpleSliderModel {
  value5: number;
 
  options14: Options,
  
}
@Component({
  selector: 'app-range-sliders',
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule,NouisliderModule,ShowcodeCardComponent,NgxSliderModule],
  templateUrl: './range-sliders.component.html',
  styleUrl: './range-sliders.component.scss'
})
export class RangeSlidersComponent {
  prismCode = prismCodeData;
  public disabled: boolean = false;
  public someRange: number[] = [0, 7];
  public someRange1: number[] = [3, 7];
  public someRange2: number[] = [4];
  public someRange3: number[] = [3];
  public someRange4: number[] = [4, 8];
  public someRange5: number[] = [4, 8];
  public someRange6: number[] = [4, 7];

  public someMin: number = -10;
  public someValue: number = 5;
  public someMax: number = 10;
  public someStep: number = 1;
  public form1: FormGroup | any;
  public form2: FormGroup | any;
  public form3: FormGroup | any;

  lockedState = false;
  lockedSlider = false;
  lockedValues = [60, 80];


  @ViewChild('slider6') slider6!: ElementRef;
  @ViewChild('slider7') slider7!: ElementRef;
  @ViewChild('lockButton') lockButton!: ElementRef;
  @ViewChild('slider6Value') slider6Value!: ElementRef;
  @ViewChild('slider7Value') slider7Value!: ElementRef;

  ngAfterViewInit(): void {
    this.initializeSliders();
  }

  initializeSliders(): void {
    const sliderOptions = {
      start: [60],
      animate: false,
      range: {
        min: 50,
        max: 100
      }
    };
    noUiSlider.create(this.slider6.nativeElement, sliderOptions);
    noUiSlider.create(this.slider7.nativeElement, { ...sliderOptions, start: [80] });

    this.slider6.nativeElement.noUiSlider.on('update', (values: string[], handle: number) => {
      this.slider6Value.nativeElement.innerHTML = values[handle];
    });

    this.slider7.nativeElement.noUiSlider.on('update', (values: string[], handle: number) => {
      this.slider7Value.nativeElement.innerHTML = values[handle];
    });

    if (this.lockButton) {
      this.lockButton.nativeElement.addEventListener('click', () => {
        this.lockedState = !this.lockedState;
        this.lockButton.nativeElement.textContent = this.lockedState ? 'unlock' : 'lock';
      });
    }

    this.slider6.nativeElement.noUiSlider.on('update', () => this.setLockedValues());
    this.slider7.nativeElement.noUiSlider.on('update', () => this.setLockedValues());

    this.slider6.nativeElement.noUiSlider.on('slide', (values: string[], handle: number) => {
      this.crossUpdate(Number(values[handle]), this.slider7.nativeElement);
    });

    this.slider7.nativeElement.noUiSlider.on('slide', (values: string[], handle: number) => {
      this.crossUpdate(Number(values[handle]), this.slider6.nativeElement);
    });
  }

  setLockedValues(): void {
    this.lockedValues = [
      Number(this.slider6.nativeElement.noUiSlider.get()),
      Number(this.slider7.nativeElement.noUiSlider.get())
    ];
  }
  crossUpdate(value: number, slider: any): void {
    // If the sliders aren't interlocked, don't cross-update.
    if (!this.lockedState) {
      return;
    }

    // Select whether to increase or decrease the other slider value.
    const a: number = this.slider6 === slider ? 0 : 1;

    // Invert a
    const b: number = a ? 0 : 1;

    // Offset the slider value.
    value -= this.lockedValues[b] - this.lockedValues[a];

    // Set the value
    slider.noUiSlider.set(value);
  }


  red = 0; green = 0; blue = 0;
  getColor(): string {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }
  onChange(value: any) {
  }

  value = 40;
  value1 = 60;
  value2 = 4;
  value3 = 8;
  options2: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBar: true,
  };
  options3: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBarEnd: true,
  };
  value4: number = 12;
  options5: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 3) {
        return 'red';
      }
      if (value <= 6) {
        return 'orange';
      }
      if (value <= 9) {
        return 'yellow';
      }
      return '#2AE02A';
    },
  };
  
 Slider1: SimpleSliderModel = {
    value5: 5,
    options14: {
      floor: 0,
      ceil: 5,
      vertical: true,
    }
  };
  public someKeyboard: number[] = [3];
  public someKeyboardConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    keyboard: true,
    step: 0.1,
    pageSteps: 10, // number of page steps, defaults to 10
    range: {
      min: 0,
      max: 5,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true,
    },
  };
  public keyupLabelOn: boolean = false;
  public keydownLabelOn: boolean = false;
  blinkKeyupLabel() {
    this.keyupLabelOn = true;
    setTimeout(() => {
      this.keyupLabelOn = false;
    }, 450);
  }
  blinkKeydownLabel() {
    this.keydownLabelOn = true;
    setTimeout(() => {
      this.keydownLabelOn = false;
    }, 450);
  }
  public someKeyboard2: number[] = [1, 3];
  public someKeyboardConfig2: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    step: 0.1,
    range: {
      min: 0,
      max: 5,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true,
    },
    keyboard: true,
  };
  minValue: number = 10;
  maxValue: number = 90;
  options13: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    noSwitching: true,
  };
  minValue1: number = 10;
  maxValue1: number = 90;

  minValue2: number = 50;
  maxValue2: number = 90;

  minValue3: number = 50;
  maxValue3: number = 90;
  options4: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    noSwitching: true,
  };

  minValue6 = 15;
  maxValue6 = 85;
  options6: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#60a5fa',
      to: '#60a5fa',
    },
  };
  minValue7 = 15;
  maxValue7 = 85;
  options7: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#eab308',
      to: '#eab308',
    },
  };
  minValue8 = 15;
  maxValue8 = 85;
  options8: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#0ea5e8',
      to: '#0ea5e8',
    },
  };
  minValue9 = 15;
  maxValue9 = 85;
  options9: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#9e5cf7',
      to: '#9e5cf7',
    },
  };
  minValue19 = 15;
  maxValue19 = 85;
  optionSuccess:Options ={
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#21ce9e',
      to: '#21ce9e',
    },
  }
  minValue10 = 15;
  maxValue10 = 85;
  options10: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#fb4242',
      to: '#fb4242',
    },
  };
  minValue11 = 15;
  options11: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#5c67f7',
      to: '#5c67f7',
    },
  };
  minValuePrimary1 = 15;
  optionsPrimary1: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#e354d4',
      to: '#e354d4',
    },
  };
  minValueprimarytint2color  = 15;
  optionsprimarytint2color : Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#ff5d9f',
      to: '#ff5d9f',
    },
  };
  minValueprimarytint3color  = 15;
  optionsprimarytint3color : Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#ff8e6f',
      to: '#ff8e6f',
    },
  };
  minValue12 = 20;
  maxValue12 = 60;
  options12: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#f43f5e',
      to: '#f43f5e',
    },
  };

  sliderConfig: any;
  sliderModel: number[] = [127, 127, 127];

  updateColor() {
    const color = `rgb(${this.sliderModel[0]}, ${this.sliderModel[1]}, ${this.sliderModel[2]})`;
    // You can update the resultElement in the way you want (e.g., using Angular Renderer2).
  }
}