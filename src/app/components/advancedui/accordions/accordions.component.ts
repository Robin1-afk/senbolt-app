import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as PrismCode from '../../../shared/prismData/advancedUi';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/shared.module';
import { SpkAccordionsComponent } from '../../../../@spk/reusable-advancedui/spk-accordions/spk-accordions.component';
@Component({
  selector: 'app-accordions',
  standalone: true,
  imports: [SharedModule,CommonModule,ShowcodeCardComponent,SpkAccordionsComponent],
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent {
  prismCode: any = PrismCode;
  accordions = [
    {
      headingId: 'hs-basic-heading-one',
      collapseId: 'hs-basic-collapse-one',
      title: 'Accordion #1',
      Customclass:'active',
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      Custombodyclass:"",
      svg:true,
      alwaysOpen:false,
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
    },
    {
      headingId: 'hs-basic-heading-two',
      collapseId: 'hs-basic-collapse-two',
      title: 'Accordion #2',
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      Customclass:'',
      Custombodyclass:"hidden",
      alwaysOpen:false,
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      svg:true,
    },
    {
      headingId: 'hs-basic-heading-three',
      collapseId: 'hs-basic-collapse-three',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      Customclass:'',
      alwaysOpen:false,
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      svg:true,
    },
  ];
  alwaysOpenAccordions = [
    {
      headingId: 'hs-basic-always-open-heading-one',
      collapseId: 'hs-basic-always-open-collapse-one',
      title: 'Accordion #1',
      Customclass:'active',
      Custombodyclass:"",
      alwaysOpen:true,
      svg:true,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
    },
    {
      headingId: 'hs-basic-always-open-heading-two',
      collapseId: 'hs-basic-always-open-collapse-two',
      title: 'Accordion #2',
      Customclass:'',
      alwaysOpen:true,
      Custombodyclass:"hidden",
      svg:true,
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
    },
    {
      headingId: 'hs-basic-always-open-heading-three',
      collapseId: 'hs-basic-always-open-collapse-three',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      Customclass:'',
      alwaysOpen:true,
      svg:true,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
    },
  ];
  nestedAccordions = [
    {
      headingId: 'hs-basic-nested-heading-one',
      collapseId: 'hs-basic-nested-collapse-one',
      title: 'Accordion #1',
      Customclass:'active',
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      isOpen: false,
      svg:true,
      children: [
        {
          id: 'sub-accordion1',
          title: 'Sub Accordion #1',
          Customclass:'active',
          content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
          isOpen: false,
          svg:true,
          buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
        },
        {
          id: 'sub-accordion2',
          title: 'Sub Accordion #2',
          Customclass:'',
          Custombodyclass:"hidden",
          svg:true,
          buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
        },
        {
          id: 'sub-accordion3',
          title: 'Sub Accordion #3',
          Customclass:'',
           Custombodyclass:"hidden",
          svg:true,
          buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
        },
      ],
    },
    {
      headingId: 'hs-basic-nested-heading-two',
      collapseId: 'hs-basic-nested-collapse-two',
      title: 'Accordion #2',
      Customclass:'',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      svg:true,
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'

    },
    {
      headingId: 'hs-basic-nested-heading-three',
      collapseId: 'hs-basic-nested-collapse-three',
      title: 'Accordion #3',
      Customclass:'',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      svg:true,
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
    },
  ];

  bordered = [
    {
      headingId: 'hs-bordered-heading-one',
      collapseId: 'hs-basic-bordered-collapse-one',
      title: 'Accordion #1',
      buttonClass:'hs-accordion-toggle dark:bg-bodybg dark:border-white/10 hs-accordion-active:text-primary inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400',
      Customclass:'active bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-bodybg dark:border-white/10',
      Custombodyclass:"",
      svg:true,
      content:' <div class="pb-4 px-5 dark:bg-bodybg"><p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p></div>',    },
    {
      headingId: 'hs-bordered-heading-two',
      collapseId: 'hs-basic-bordered-collapse-two',
      title: 'Accordion #2',
      svg:true,
      buttonClass:'hs-accordion-toggle dark:bg-bodybg hs-accordion-active:text-primary inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400',
      Customclass:'bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-bodybg dark:border-white/10',
      Custombodyclass:"hidden",
      content:' <div class="pb-4 px-5 dark:bg-bodybg"><p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p></div>',
      
    },
    {
      headingId: 'hs-bordered-heading-three',
      collapseId: 'hs-basic-bordered-collapse-three',
      title: 'Accordion #3',
      svg:true,
      buttonClass:'hs-accordion-toggle dark:bg-bodybg hs-accordion-active:text-primary inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400',
      Custombodyclass:"hidden",
      Customclass:'bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-bodybg dark:border-white/10',
      content:' <div class="pb-4 px-5 dark:bg-bodybg"><p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p></div>',     
    },
  ];
 
  noArrowAccordions = [
    {
      headingId: 'hs-basic-no-arrow-heading-one',
      collapseId: 'hs-basic-no-arrow-collapse-one',
      title: 'Accordion #1',
      Customclass:'active',
      Custombodyclass:"",
      svg:false,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
    },
    {
      headingId: 'hs-basic-no-arrow-heading-two',
      collapseId: 'hs-basic-no-arrow-collapse-two',
      title: 'Accordion #2',
      Customclass:'',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      svg:false,
    },
    {
      headingId: 'hs-basic-no-arrow-heading-three',
      collapseId: 'hs-basic-no-arrow-collapse-three',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      Customclass:'',
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      svg:false,
    },
    {
      headingId: 'hs-basic-no-arrow-heading-four',
      collapseId: 'hs-basic-no-arrow-collapse-four',
      title: 'Accordion #4',
      Custombodyclass:"hidden",
      Customclass:'',
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      svg:false,
    },
    {
      headingId: 'hs-basic-no-arrow-heading-five',
      collapseId: 'hs-basic-no-arrow-collapse-five',
      title: 'Accordion #5',
      Custombodyclass:"hidden",
      Customclass:'',
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      svg:false,
    },
    {
      headingId: 'hs-basic-no-arrow-heading-six',
      collapseId: 'hs-basic-no-arrow-collapse-six',
      title: 'Accordion #6',
      Custombodyclass:"hidden",
      Customclass:'',
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      svg:false,
    },
  ];
  ArrowAccordions = [
    {
      headingId: 'hs-basic-with-arrow-heading-one',
      collapseId: 'hs-basic-with-arrow-collapse-one',
      title: 'Accordion #1',
      Customclass:'active',
      Custombodyclass:"",
      arrow:true,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
    },
    {
      headingId: 'hs-basic-with-arrow-heading-two',
      collapseId: 'hs-basic-with-arrow-collapse-two',
      title: 'Accordion #2',
      Customclass:'',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      arrow:true,
    },
    {
      headingId: 'hs-basic-with-arrow-heading-three',
      collapseId: 'hs-basic-with-arrow-collapse-three',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      Customclass:'',
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      arrow:true,
    },
  ];
  stretchedAccordions = [
    {
      headingId: 'hs-basic-with-title-and-arrow-stretched-heading-one',
      collapseId: 'hs-basic-with-title-and-arrow-stretched-collapse-one',
      title: 'Accordion #1',
      Customclass:'active',
      Custombodyclass:"",
      afterarrow:true,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
    },
    {
      headingId: 'hs-basic-with-title-and-arrow-stretched-heading-two',
      collapseId: 'hs-basic-with-title-and-arrow-stretched-collapse-two',
      title: 'Accordion #2',
      Customclass:'',
      Custombodyclass:"hidden",
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      afterarrow:true,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
    },
    {
      headingId: 'hs-basic-with-title-and-arrow-stretched-heading-three',
      collapseId: 'hs-basic-with-title-and-arrow-stretched-collapse-three',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
      Customclass:'',
      content:' <p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      afterarrow:true,
    },
  ];
  activebordered = [
    {
      headingId: 'hs-active-bordered-heading-one',
      collapseId: 'hs-basic-active-bordered-collapse-one',
      title: 'Accordion #1',
      buttonClass:'hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400',
      Customclass:' hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-white/10 dark:bg-bodybg dark:border-transparent',
      Custombodyclass:"hidden",
      svg:false,
      content:' <div class="pb-4 px-5"><p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p></div>',    },
    {
      headingId: 'hs-active-bordered-heading-two',
      collapseId: 'hs-basic-active-bordered-collapse-two',
      title: 'Accordion #2',
      svg:false,
      buttonClass:'hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400',
      Customclass:' hs-accordion-active:border-gray-200 active bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-white/10 dark:bg-bodybg dark:border-transparent',
      Custombodyclass:"",
      content:' <div class="pb-4 px-5 "><p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p></div>',
      
    },
    {
      headingId: 'hs-active-bordered-heading-three',
      collapseId: 'hs-basic-active-bordered-collapse-three',
      title: 'Accordion #3',
      svg:false,
      buttonClass:'hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400',
      Custombodyclass:"hidden",
      Customclass:'hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-white/10 dark:bg-bodybg dark:border-transparent',
      content:' <div class="pb-4 px-5"><p class="text-gray-800 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p></div>',     
    },
  ];
  basiccustomAccordions = [
    {
      headingId: 'hs-basic-heading-custom-one',
      collapseId: 'hs-basic-collapse-custom-one',
      title: 'Accordion #1',
      Customclass:'accordion-item overflow-hidden !border-b-0',
      buttonClass:"hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80",
      Custombodyclass:"hidden",
      alwaysOpen:false,
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`
    },
    {
      headingId: 'hs-basic-heading-custom-two',
      collapseId: 'hs-basic-collapse-custom-two',
      title: 'Accordion #2',
      buttonClass:"hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80",
      Customclass:'accordion-item !border-b-0',
      Custombodyclass:"hidden",
      alwaysOpen:false,
      content:`   <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`,
    },
    {
      headingId: 'hs-basic-heading-custom-three',
      collapseId: 'hs-basic-collapse-custom-three',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80",
      Customclass:'accordion-item overflow-hidden',
      alwaysOpen:false,
      content:`  <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`,
    },
  ];
  basiccustomIconAccordions = [
    {
      headingId: 'hs-basic-with-arrow1-heading-one',
      collapseId: 'hs-basic-with-arrow1-collapse-one',
      title: 'Accordion #1',
      Customclass:'accordion-item overflow-hidden !border-b-0',
      buttonClass:"hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80",
      Custombodyclass:"hidden",
      alwaysOpen:false,
      arrow:true,
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`
    },
    {
      headingId: 'hs-basic-with-arrow1-heading-two',
      collapseId: 'hs-basic-with-arrow1-collapse-two',
      title: 'Accordion #2',
      buttonClass:"hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80",
      Customclass:'accordion-item !border-b-0',
      Custombodyclass:"hidden",
      alwaysOpen:false,
      arrow:true,
      content:`   <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`,
    },
    {
      headingId: 'hs-basic-with-arrow1-heading-three',
      collapseId: 'hs-basic-with-arrow1-collapse-three',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80",
      Customclass:'accordion-item overflow-hidden',
      alwaysOpen:false,
      arrow:true,
      content:`  <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`,
    },
  ];
  arrowstrechedAccordions = [
    {
      headingId: 'hs-basic-with-title-and-arrow1-stretched-heading-one',
      collapseId: 'hs-basic-with-title-and-arrow1-stretched-collapse-one',
      title: 'Accordion #1',
      Customclass:' accordion-item  overflow-hidden !border-b-0',
      Custombodyclass:"",
      afterarrow:true,
      buttonClass:"hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80",
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
    },
    {
      headingId: 'hs-basic-with-title-and-arrow1-stretched-heading-two',
      collapseId: 'hs-basic-with-title-and-arrow1-stretched-collapse-two',
      title: 'Accordion #2',
      Customclass:'accordion-item !border-b-0',
      Custombodyclass:"hidden",
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      afterarrow:true,
      buttonClass:"hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group pt-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80",
    },
    {
      headingId: 'hs-basic-with-title-and-arrow1-stretched-heading-three',
      collapseId: 'hs-basic-with-title-and-arrow1-stretched-collapse-three',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group pt-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80",
      Customclass:'accordion-item  overflow-hidden',
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      afterarrow:true,
    },
  ];
  lightprimaryAccordions = [
    {
      headingId: 'hs-accordion-heading-1',
      collapseId: 'hs-accordion-collapse-1',
      title: 'Accordion #1',
      Customclass:'active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10',
      Custombodyclass:"",
      afterarrow:true,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80",
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
    },
    {
      headingId: 'hs-accordion-heading-2',
      collapseId: 'hs-accordion-collapse-2',
      title: 'Accordion #2',
      Customclass:'overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10',
      Custombodyclass:"hidden",
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      afterarrow:true,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80",
    },
    {
      headingId: 'hs-accordion-heading-3',
      collapseId: 'hs-accordion-collapse-3',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80",
      Customclass:'overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10',
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      afterarrow:true,
    },
  ];
  lightsecondaryAccordions = [
    {
      headingId: 'hs-accordion-heading-1-primary',
      collapseId: 'hs-accordion-collapse-1-primary',
      title: 'Accordion #1',
      Customclass:'active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10',
      Custombodyclass:"",
      afterarrow:true,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-secondary hs-accordion-active:bg-secondary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-white/80",
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
    },
    {
      headingId: 'hs-accordion-heading-2-primary',
      collapseId: 'hs-accordion-collapse-2-primary',
      title: 'Accordion #2',
      Customclass:'overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10',
      Custombodyclass:"hidden",
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      afterarrow:true,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-secondary hs-accordion-active:bg-secondary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-white/80",
    },
    {
      headingId: 'hs-accordion-heading-3-primary',
      collapseId: 'hs-accordion-collapse-3-primary',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-secondary hs-accordion-active:bg-secondary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-white/80",
      Customclass:'overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10',
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      afterarrow:true,
    },
  ];
  solidprimaryAccordions = [
    {
      headingId: 'hs-primary-heading-1',
      collapseId: 'hs-primary-collapse-1',
      title: 'Accordion #1',
      Customclass:'active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10',
      Custombodyclass:"",
      afterarrow:true,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80",
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
    },
    {
      headingId: 'hs-primary-heading-2',
      collapseId: 'hs-primary-collapse-2',
      title: 'Accordion #2',
      Customclass:'overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10',
      Custombodyclass:"hidden",
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      afterarrow:true,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80",
    },
    {
      headingId: 'hs-primary-heading-3',
      collapseId: 'hs-primary-collapse-3',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80",
      Customclass:'overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10',
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      afterarrow:true,
    },
  ];
  solidsecondaryAccordions = [
    {
      headingId: 'hs-secondary-heading-1',
      collapseId: 'hs-secondary-collapse-1',
      title: 'Accordion #1',
      Customclass:'active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10',
      Custombodyclass:"",
      afterarrow:true,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-secondary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80",
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>'
    },
    {
      headingId: 'hs-secondary-heading-2',
      collapseId: 'hs-secondary-collapse-2',
      title: 'Accordion #2',
      Customclass:'overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10',
      Custombodyclass:"hidden",
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      afterarrow:true,
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-secondary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80",
    },
    {
      headingId: 'hs-secondary-heading-3',
      collapseId: 'hs-secondary-collapse-3',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-secondary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80",
      Customclass:'overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10',
      content:' <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200" ><em>This is the third item\'s accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>',
      afterarrow:true,
    },
  ];
  primarybordered = [
    {
      headingId: 'hs-basic-heading1',
      collapseId: 'hs-basic-collapse1',
      title: 'Accordion #1',
      Customclass:'accordion-item active',
      Custombodyclass:"",
      afterarrow:true,
      buttonClass:"hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center justify-between  gap-x-3 w-full font-semibold text-start  transition",
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`
    },
    {
      headingId: 'hs-basic-heading2',
      collapseId: 'hs-basic-collapse2',
      title: 'Accordion #2',
      Customclass:'accordion-item',
      Custombodyclass:"hidden",
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`,
      afterarrow:true,
      buttonClass:"hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group  inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition",
    },
    {
      headingId: 'hs-basic-heading3',
      collapseId: 'hs-basic-collapse3',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group  inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition",
      Customclass:'accordion-item ',
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`,
      afterarrow:true,
    },
  ];
  successbordered = [
    {
      headingId: 'hs-basic-heading11',
      collapseId: 'hs-basic-collapse11',
      title: 'Accordion #1',
      Customclass:'accordion-item active',
      Custombodyclass:"",
      afterarrow:true,
      buttonClass:"hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center justify-between  gap-x-3 w-full font-semibold text-start  transition",
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`
    },
    {
      headingId: 'hs-basic-heading12',
      collapseId: 'hs-basic-collapse12',
      title: 'Accordion #2',
      Customclass:'accordion-item',
      Custombodyclass:"hidden",
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`,
      afterarrow:true,
      buttonClass:"hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group  inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition",
    },
    {
      headingId: 'hs-basic-heading13',
      collapseId: 'hs-basic-collapse13',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group  inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition",
      Customclass:'accordion-item ',
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`,
      afterarrow:true,
    },
  ];
  leftaligned = [
    {
      headingId: 'hs-basic-heading21',
      collapseId: 'hs-basic-collapse21',
      title: 'Accordion #1',
      Customclass:'accordion-item',
      Custombodyclass:"hidden",
      afterarrow:true,
      buttonClass:"hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center gap-x-3 w-full font-semibold text-start  transition",
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`
    },
    {
      headingId: 'hs-basic-heading22',
      collapseId: 'hs-basic-collapse22',
      title: 'Accordion #2',
      Customclass:'accordion-item',
      Custombodyclass:"hidden",
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`,
      afterarrow:true,
      buttonClass:"hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center gap-x-3 w-full font-semibold text-start  transition",
    },
    {
      headingId: 'hs-basic-heading23',
      collapseId: 'hs-basic-collapse23',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center gap-x-3 w-full font-semibold text-start  transition",
      Customclass:'accordion-item ',
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`,
      afterarrow:true,
    },
  ];
  customAccodions = [
    {
      headingId: 'hs-basic-heading31',
      collapseId: 'hs-basic-collapse31',
      title: 'Accordion #1',
      Customclass:'accordion-item custom-accordion-primary',
      Custombodyclass:"hidden",
      afterarrow:true,
      buttonClass:"hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition",
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`
    },
    {
      headingId: 'hs-basic-heading32',
      collapseId: 'hs-basic-collapse32',
      title: 'Accordion #2',
      Customclass:'accordion-item custom-accordion-secondary',
      Custombodyclass:"hidden",
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`,
      afterarrow:true,
      buttonClass:"hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition",
    },
    {
      headingId: 'hs-basic-heading33',
      collapseId: 'hs-basic-collapse33',
      title: 'Accordion #3',
      Custombodyclass:"hidden",
      buttonClass:"hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition",
      Customclass:'accordion-item custom-accordion-secondary ',
      content:`    <div class="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use
                                  to
                                  style each element. These classes control the overall appearance, as
                                  well as
                                  the
                                  showing and hiding via CSS transitions. You can modify any of this with
                                  custom
                                  CSS or overriding our default variables. It's also worth noting that
                                  just
                                  about
                                  any HTML can go within the <code>.accordion-body</code>, though the
                                  transition
                                  does limit overflow.
                              </div>`,
      afterarrow:true,
    },
  ];
}
