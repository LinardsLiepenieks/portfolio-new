import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;
  private isScrolling = false;
  private readonly scrollDelay = 100;
  parallaxOffset: number = 0;
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
  onContainerScroll(event: Event) {
    const scrollPosition = (event.target as HTMLElement).scrollTop;
    const maxParallaxOffset = this.scrollContainer.nativeElement.clientHeight * 0.3;
    this.parallaxOffset = Math.min(scrollPosition * 0.5, maxParallaxOffset);
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






  


}
