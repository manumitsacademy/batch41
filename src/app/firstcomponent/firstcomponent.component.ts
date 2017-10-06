import { Component, OnInit } from '@angular/core';
import { Hero } from '.././hero'
@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

	hero:Hero= {
		id:2,
		name:"AAMIR"
	}
  constructor() { }

  ngOnInit() {
  }

}
