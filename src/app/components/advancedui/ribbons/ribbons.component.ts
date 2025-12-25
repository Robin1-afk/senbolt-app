import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkRibbonsComponent } from '../../../../@spk/reusable-advancedui/spk-ribbons/spk-ribbons.component';

@Component({
  selector: 'app-ribbons',
  standalone: true,
  imports: [SharedModule,SpkRibbonsComponent],
  templateUrl: './ribbons.component.html',
  styleUrl: './ribbons.component.scss'
})
export class RibbonsComponent {
  ribbonCards2 = [
    {
      mainClass: 'box shadow-none mb-0 border border-defaultborder dark:border-defaultborder/10',
      bodyClass: '!p-6',
      ribbonClass: 'ribbon-2 ribbon-primary ribbon-left',
      descriptionClass: 'pt-4',
      textAlignment: 'mt-2 text-end',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      bottomTitle: 'Left Ribbon',
      ribbonText: 'Congratulations',
    },
    {
      mainClass: 'box shadow-none mb-0 border border-defaultborder dark:border-defaultborder/10',
      bodyClass: '!p-6',
      ribbonClass: 'ribbon-2 ribbon-success ribbon-right',
      descriptionClass: 'pt-4',
      textAlignment: 'mt-2 text-start',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      bottomTitle: 'Right Ribbon',
      ribbonText: 'Congratulations',
    },
  ];
  ribbonCards3 = [
    {
      mainClass: 'box shadow-none mb-0 border border-defaultborder dark:border-defaultborder/10',
      bodyClass: '!p-6',
      ribbonClass: 'ribbon-3 top-left ribbon-success',
      descriptionClass: '',
      textAlignment: 'mb-2 text-end',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      topTitle: 'Top Left Ribbon',
      ribbonIcon: "fe fe-zap"
    },
    {
      mainClass: 'box shadow-none mb-0 border border-defaultborder dark:border-defaultborder/10',
      bodyClass: '!p-6',
      ribbonClass: 'ribbon-3 top-right ribbon-secondary',
      descriptionClass: '',
      textAlignment: 'mb-2 text-start',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      topTitle: 'Top Right Ribbon',
      ribbonIcon: "fe fe-zap",
    },
    {
      mainClass: 'box shadow-none mb-0 border border-defaultborder dark:border-defaultborder/10',
      bodyClass: '!p-6',
      ribbonClass: 'ribbon-3 top-left ribbon-info',
      descriptionClass: '',
      textAlignment: 'mb-2 text-end',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      topTitle: 'Top Left Ribbon',
      ribbonIcon: "fe fe-zap",
    },
    {
      mainClass: 'box shadow-none mb-0 border border-defaultborder dark:border-defaultborder/10',
      bodyClass: '!p-6',
      ribbonClass: 'ribbon-3 top-right ribbon-warning',
      descriptionClass: '',
      textAlignment: 'mb-2 text-start',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      topTitle: 'Top Right Ribbon',
      ribbonIcon: "fe fe-zap",
    },
  ];
  ribbonCards4 = [
    {
      mainClass: 'box shadow-none mb-0 border border-defaultborder dark:border-defaultborder/10',
      bodyClass: '!p-6',
      ribbonClass: 'ribbon-4 top-left ribbon-primary',
      descriptionClass: '',
      textAlignment: 'mb-2 text-end',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      topTitle: 'Top Left Ribbon',
      ribbonContent: 'May',
    },
    {
      mainClass: 'box shadow-none mb-0 border border-defaultborder dark:border-defaultborder/10',
      bodyClass: '!p-6',
      ribbonClass: 'ribbon-4 top-right ribbon-secondary',
      descriptionClass: '',
      textAlignment: 'mb-2 text-start',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      topTitle: 'Top Right Ribbon',
      ribbonContent: 'May',
    },
  ];
  ribbonCards5 = [
    {
      mainClass: 'box mb-0 overflow-hidden border border-defaultborder dark:border-defaultborder/10 !shadow-none',
      bodyClass: '!p-6',
      ribbonClass: 'ribbon-5 top-left ribbon-primary',
      descriptionClass: '',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      textAlignment: 'mb-2 text-end',
      topTitle: 'Top Left Ribbon',
      content: 'OFFER',
    },
    {
      mainClass: 'box mb-0 overflow-hidden border border-defaultborder dark:border-defaultborder/10 !shadow-none',
      bodyClass: '!p-6',
      ribbonClass: 'ribbon-5 top-right ribbon-secondary',
      descriptionClass: '',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      textAlignment: 'mb-2 text-start',
      topTitle: 'Top Right Ribbon',
      content: 'OPEN',
    },
    {
      mainClass: 'box mb-0 overflow-hidden border border-defaultborder dark:border-defaultborder/10 !shadow-none',
      bodyClass: '!p-6',
      ribbonClass: 'ribbon-5 bottom-left ribbon-success',
      descriptionClass: 'mb-2',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      textAlignment: 'text-end',
      bottomTitle: 'Bottom Left Ribbon',
      content: 'CLOSE',
    },
    {
      mainClass: 'mb-0 overflow-hidden',
      bodyClass: '!p-6',
      ribbonClass: 'ribbon-5 bottom-right ribbon-orange',
      descriptionClass: 'mb-2',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      textAlignment: 'text-start',
      bottomTitle: 'Bottom Right Ribbon',
      content: 'SALE',
    },
  ];
  ribbonCards6 = [
    {
      mainClass: 'box mb-0 border border-defaultborder dark:border-defaultborder/10 !shadow-none',
      bodyClass: 'p-4',
      ribbonClass: 'ribbon-6 ribbon-left ribbon-primary',
      descriptionClass: '',
      textAlignment: 'mb-2 text-end',
      topTitle: 'Top Left Ribbon',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      content: 'Service',
    },
    {
      mainClass: 'box mb-0 border border-defaultborder dark:border-defaultborder/10 !shadow-none',
      bodyClass: 'p-4',
      ribbonClass: 'ribbon-6 ribbon-right ribbon-secondary',
      descriptionClass: '',
      textAlignment: 'mb-2 text-start',
      topTitle: 'Top Right Ribbon',
      description:
        'Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Lets celebrate their achievements together!',
      content: 'Offer',
    },
  ];
}
