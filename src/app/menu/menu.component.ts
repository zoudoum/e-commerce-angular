import { Component } from '@angular/core';
import { ClickBouttonService } from '../click-boutton.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  bio:boolean=false
  noix:boolean=true
  menthe:boolean=false
  ruby:boolean=false
  noir:boolean=false
  lait:boolean=false
  blond:boolean=false
  etat:boolean=false
etatSvg:string="#EDE0C9"
bgimg:string="orange"
  constructor(private clickService:ClickBouttonService){
    
  }
ngOnInit() {
  this.clickService.svgNavClick$.subscribe(() => {

    this.noix=false
    this.blond=true
    console.log(this.blond)
  });
  
}
  

onClickBoutton1(){
  this.bio=false
  this.lait=false
  this.blond=false
  this.noir=true
  this.noix=false
  this.menthe=false
  this.ruby=false
  
}

onClickBoutton2(){
  this.bio=false
  this.lait=true
  this.blond=false
  this.noir=false
  this.noix=false
  this.menthe=false
  this.ruby=false
  
}
onClickBoutton3(){
  this.bio=false
  this.lait=false
  this.blond=false
  this.noir=false
  this.noix=false
  this.menthe=false
  this.ruby=true
  
}
onClickBoutton4(){
  this.bio=false
  this.lait=false
  this.blond=false
  this.noir=false
  this.noix=false
  this.menthe=true
  this.ruby=false
  
}
onClickBoutton5(){
  this.bio=false
  this.lait=false
  this.blond=false
  this.noir=false
  this.noix=true
  this.menthe=false
  this.ruby=false
  
}
onClickBoutton6(){
  this.bio=false
  this.lait=false
  this.blond=true
  this.noir=false
  this.noix=false
  this.menthe=false
  this.ruby=false
  this.clickService.sendSvgNavClick();
  
}
onClickBoutton7(){
  this.bio=true
  this.lait=false
  this.blond=false
  this.noir=false
  this.noix=false
  this.menthe=false
  this.ruby=false
  
}


getEtat(): string {
  // logique pour déterminer la couleur
  return '#FFA500';
}

}
