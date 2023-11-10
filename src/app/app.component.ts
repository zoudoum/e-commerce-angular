import { Component, HostListener } from '@angular/core';
declare const bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serviceiptv';
  screenWidth: number;
  etat:boolean=false;
  etatbg:string;
  ngOnInit() {
    
    this.screenWidth = window.innerWidth;
    this.etatbg='#FFA500';
    
  }
 
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
   
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if(window.scrollY==0){
      this.etatbg='#FFA500';
    }
    else{
    this.etatbg='white';}
    
  }
  onClickMenu(){
   this.etat=true;
  }
  getEtat(){
    return this.etat;
  }
  onClickX(){
    this.etat=false;
  }
}
