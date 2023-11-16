import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  etat1:boolean=false;
  etat2:boolean=false;
  etat3:boolean=false;
  etat4:boolean=false;
  screenWidth: number;
  constructor(){
    this.screenWidth = window.innerWidth;
    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;

  }
  onCLickInfo1(){
    if(this.etat1==false)
  this.etat1=true;
  else
  this.etat1=false;
  }

  onCLickInfo2(){
    if(this.etat2==false)
    this.etat2=true;
    else
    this.etat2=false;
  }
  onCLickInfo3(){
    if(this.etat3==false)
    this.etat3=true;
    else
    this.etat3=false;

  }
  onCLickInfo4(){
    if(this.etat4==false)
    this.etat4=true;
    else
    this.etat4=false;
  }

}
