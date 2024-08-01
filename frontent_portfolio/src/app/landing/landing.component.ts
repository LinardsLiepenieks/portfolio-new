import { Component, OnInit, ViewChild, Input, ElementRef} from '@angular/core';
import { ProfileInfoService } from '../services/profile-info.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css', './landing.figure.css'],

})
export class LandingComponent implements OnInit {

  constructor (private profileInfoService: ProfileInfoService) { }
  @Input() parallaxOffset: number = 0;
  logoSource: string = 'assets/LOGO.png'
  profileData: any;



  ngOnInit(): void {
    this.getProfileInfoData();
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
