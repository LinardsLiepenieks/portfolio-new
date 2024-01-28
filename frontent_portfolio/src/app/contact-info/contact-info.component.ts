import { Component, Input, OnInit } from '@angular/core';
import { ProfileInfoService } from '../services/profile-info.service';
@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  constructor (private profileInfoService: ProfileInfoService) { }

  profileData: any;
  ngOnInit(): void {
    this.getProfileInfoData();
  }
  getProfileInfoData()
  {
    this.profileInfoService.getProfileData().subscribe(
      {
        next: (data) =>{
          console.log(data)
          this.profileData = data;
        },
        error: (error) => {
          console.log(error)
        }
      }
    )
  }
}
