import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileInfoService {
  private apiUrl = 'http://127.0.0.1:8000/api/';
  private profileData: any;

  constructor(private http: HttpClient) {  }
  getProfileData(){
      let url: string = this.apiUrl+'profile_info/';

      return this.http.get(url);
    }
  setData(data: any) {
    console.log("SETTING DATA")
    this.profileData = data; // Store the data in the service
  }
  getData() {
    console.log("GETTING DATA", this.profileData)
    return this.profileData; // Retrieve the stored data
  }



}
