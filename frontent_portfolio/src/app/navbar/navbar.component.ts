import { Component, ElementRef, HostListener} from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public activeSection: string = "landing";
  private sections: HTMLElement[] = [];
  private isScrolling: boolean = false;
  private autoScroll: boolean = false;
  private scrollTimeout: any;



  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
  this.sections = Array.from(document.querySelectorAll('.section'));
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //change active link
        this.activeSection = entry.target.id;
        

        // Calculate the top position as a percentage of the viewport height
        
      }       
    });
  }, 
  {threshold: 0.3});
    
  this.sections.forEach(section => observer.observe(section));
  }



  scrollToSection(link: HTMLAnchorElement | null, sectionId: string) {
    console.log("CALLING SCROLL INTO VIEW")
    //get section when link is clicked
    const element = document.getElementById(sectionId);
    //if section exists scroll to section
    if (element) {
      element.scrollIntoView({ behavior: 'smooth',
      block: 'center', 
      inline: 'nearest'
      });


    }
    
  }
  /*
  @HostListener('window:scroll', ['$event'])
  onScroll()
  {   
      console.log("-------")
      clearTimeout(this.scrollTimeout);
      
      if (!this.isScrolling) {
        this.scrollTimeout = setTimeout(() => {
          console.log("USER STOPPED")
          this.isScrolling = true;
          this.scrollToSection(null, this.activeSection);
        
      }, 500);}
      else
      {
        this.scrollTimeout = setTimeout(() =>{
        console.log("SCROLLING TO SECTION")
          this.isScrolling = false;
        }, 500)
      }
  }*/

    
   
  }


  

  
 


