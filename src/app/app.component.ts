import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title:string="Manumits Heroes";
	h:boolean=false;
	newhero:string;
	
	
	
  heroes:Hero[] = [{
		id:1,
		name:"Sharukh"
	},
	{
		id:2,
		name:"Akshay"
	},
	{
		id:3,
		name:"Farhan Aktar"
	}];
	selectedHero:Hero = this.heroes[0];
	//nayaHero = new Hero();
	//let x:Hero;
	
	currentHero(ind:number):void{
		this.h=true;
		this.selectedHero=this.heroes[ind];
	}
	addHero():void{
		console.log("Adding Hero Here"+this.newhero);
		nayaHero={id:0,name:""};
		nayaHero.id=this.heroes.length+1;
		this.nayaHero.name=this.newhero;
		heroes.push(nayaHero);
	}
}
