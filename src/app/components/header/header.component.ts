import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	showMobMenu = false;
	constructor(private router: Router) { }

	goto(page: string, id: string | null = null): void {
		this.showMobMenu = false;
		
		if (id) {
			this.router.navigate(['/' + page], { fragment: id });
		}
		else {
			this.router.navigate(['/' + page]);
		}
	}

	toggleMenu(): void {
		this.showMobMenu = !this.showMobMenu;
	}
}
