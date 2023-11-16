import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  screenWidth: number;
  widthimg:string="170px";
  heightimg1:string="290px";
  heightimg2:string="200px";
  heightimg3:string="150px";
  heightimg4:string="250px";
  heightimg5:string="290px";
  ngOnInit() {
    this.screenWidth = window.innerWidth;
   
    if(this.screenWidth>=556&&this.screenWidth<=700){
      this.widthimg="140px";
      this.heightimg1="230px";
      this.heightimg2="180px";
      this.heightimg3="130px";
      this.heightimg4="230px";
      this.heightimg5="270px";
    }
    else if(this.screenWidth>=462&&this.screenWidth<556)
    {
      this.widthimg="100px";
      this.heightimg1="210px";
      this.heightimg2="160px";
      this.heightimg3="110px";
      this.heightimg4="210px";
      this.heightimg5="250px";
    }
    else if(this.screenWidth<462){
      this.widthimg="100px";
      this.heightimg1="210px";
      this.heightimg2="160px";
      this.heightimg3="110px";
      this.heightimg4="190px";
      this.heightimg5="230px";
    }
  }
  constructor(){
    this.screenWidth = window.innerWidth;
    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
   
    if(this.screenWidth>=556&&this.screenWidth<=700){
      this.widthimg="140px";
      this.heightimg1="230px";
      this.heightimg2="180px";
      this.heightimg3="130px";
      this.heightimg4="230px";
      this.heightimg5="270px";
    }
    else if(this.screenWidth>=462&&this.screenWidth<556)
    {
      this.widthimg="100px";
      this.heightimg1="210px";
      this.heightimg2="160px";
      this.heightimg3="110px";
      this.heightimg4="210px";
      this.heightimg5="250px";

    }
    else if(this.screenWidth<462){
      this.widthimg="100px";
      this.heightimg1="210px";
      this.heightimg2="160px";
      this.heightimg3="110px";
      this.heightimg4="190px";
      this.heightimg5="230px";
    }
    else if(this.screenWidth>700){
      this.widthimg="170px";
      this.heightimg1="290px";
      this.heightimg2="200px";
      this.heightimg3="150px";
      this.heightimg4="250px";
      this.heightimg5="290px";
    }
   
  }

}
