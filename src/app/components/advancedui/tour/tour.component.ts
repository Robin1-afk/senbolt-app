import { Component } from '@angular/core';

import { addSteps as defaultSteps, defaultStepOptions } from "./tour.data";

import { ShepherdService } from "angular-shepherd";
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [SharedModule],
  // providers: [ShepherdService],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss'
})
export class TourComponent {
  constructor(private readonly _shepherdService: ShepherdService) {}

  ngAfterViewInit() {
    this._shepherdService.defaultStepOptions = defaultStepOptions;
    this._shepherdService.modal = true; 
    this._shepherdService.confirmCancel = false;
    this._shepherdService.addSteps(defaultSteps);
    this._shepherdService.start();
  }
}
