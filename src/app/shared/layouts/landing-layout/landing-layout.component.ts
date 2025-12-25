import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-landing-layout',
  standalone:false,
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.scss'
})
export class LandingLayoutComponent {
  constructor(
    private router:Router, 
    private navServices: NavService, public renderer: Renderer2,
    private el: ElementRef,
    private elementRef: ElementRef){}
  ngOnDestroy(){
 
    document.body.classList.remove('landing-body');   
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'vertical');
    this.renderer.setAttribute(htmlElement, 'data-menu-styles', 'dark');
    this.renderer.removeAttribute(htmlElement, 'data-nav-style')
}

}
