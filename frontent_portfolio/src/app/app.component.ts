import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { LandingScrollService } from './services/landing-scroll.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;
  private isScrolling = false;
  private readonly scrollDelay = 100;
  private wheelListener: ((event: WheelEvent) => void) | null = null;

  title = 'frontent_portfolio';

  ngAfterViewInit() {
    this.wheelListener = this.handleWheel.bind(this);
    this.scrollContainer.nativeElement.addEventListener('wheel', this.wheelListener, { passive: false });
  }
  ngOnDestroy() {
    if (this.wheelListener) {
      this.scrollContainer.nativeElement.removeEventListener('wheel', this.wheelListener);
    }
  }

  private handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    if (this.isScrolling) return;

    const direction = event.deltaY > 0 ? 1 : -1;
    const container = this.scrollContainer.nativeElement;
    const currentScroll = container.scrollTop;
    const sectionHeight = container.clientHeight;

    const targetScroll = Math.round((currentScroll / sectionHeight) + direction) * sectionHeight;

    this.isScrolling = true;
    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });

    setTimeout(() => {
      this.isScrolling = false;
    }, this.scrollDelay);
  }
  onContainerScroll(event: Event) {
    // You can add additional logic here if needed
  }





  


}
