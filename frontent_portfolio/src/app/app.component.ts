import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { LandingScrollService } from './services/landing-scroll.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  title = 'frontent_portfolio';

  constructor(private scrollService: LandingScrollService) {}

  @HostListener('scroll', ['$event'])
  onContainerScroll(event: Event) {
    const container = this.scrollContainer.nativeElement;
    const scrollY = container.scrollTop;
    this.scrollService.setScrollValue(scrollY);

    
  }


}
