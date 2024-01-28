import { Component, OnInit, HostListener, ViewChild, ElementRef} from '@angular/core';
import { ProfileInfoService } from '../services/profile-info.service';
import { LandingScrollService } from '../services/landing-scroll.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css', './landing.figure.css'],

})
export class LandingComponent implements OnInit {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  constructor (private profileInfoService: ProfileInfoService, private scrollService: LandingScrollService) { }
  parallaxOffset: number = 0;
  logoSource: string = 'assets/LOGO.png'
  profileData: any;
  scrollValue: number = 0;


  ngOnInit(): void {
    this.getProfileInfoData();
    this.scrollService.getScrollValue().subscribe((value) => {
      this.parallaxOffset = value * 0.8; // Adjust the speed as needed
    });

  }


  getProfileInfoData()
  {
    this.profileInfoService.getProfileData().subscribe(
      {
        next: (data) =>{
          this.profileData = data;
        },
        error: (error) => {
          console.log(error)
        }
      }
    )
  }
}
