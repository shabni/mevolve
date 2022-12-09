import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	slides = [
		{
		  url: 'assets/images/img1.PNG'
		}
		,
		{
		  url: 'assets/images/img1.PNG'
		}
		,
		{
		  url: 'assets/images/img1.PNG'
		},
		{
		  url: 'assets/images/img1.PNG'
		}
	]

	constructor() { }

	ngOnInit(): void {
	}
}
