import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent  implements OnInit{
  etat:boolean=false
etatSvg:string="white"
heightdiv:string;
clicksvg=false;
  screenWidth: number;
  etat1:boolean=true;
  etat2:boolean=true;
  etat3:boolean=false;
  etat4:boolean=false;
  constructor(private router: Router) {}

    navigateToSection() {
        const element = document.getElementById('maSection');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

ngOnInit() {
  this.screenWidth = window.innerWidth;
 
  if(this.screenWidth<1016){
   
    this.etat1=false;
    this.etat2=false;
    
  }
  
 
  
  
  
  
}
  
  onCardFocusHandler() {
     console.log('focus')
      this.etat=true
    
   
  }
  onCardMouseLeave(){
    console.log('leave')
     this.etat=false
    
  }
  getEtat(){
    if(this.etat==true)
    return "#F5DD92"
    else
    return "white"
  }

  onClickSvg(){
    
    this.clicksvg=true;
    
  this.etat=false
 
  
    this.etat1=true
  }
  


  onClickSvg1(){
    this.etat=false
  this.clicksvg=false
    if(this.etat2==false)
    this.etat1=false
  
  
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth<1016){
   
      this.etat1=false;
      this.etat2=false;
    }
    else{
      this.etat1=true;
      this.etat2=true;
      
    }
   
  }
}
