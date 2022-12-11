import { Component } from '@angular/core';
import { PricePlan } from 'src/app/models/models';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
	pricing: PricePlan[] = [];
	offers: string[] = [];
	
	constructor() {
		this.pricing = [
			{ price: 0, type: 'Free', duration: 'For 30 days' },
			{ price: 2.99, type: 'Per Month', duration: 'Monthly Billing' },
			{ price: 3.99, type: 'Per Year', duration: 'Yearly Billing' },
		];

		this.offers = [
			"Add Todos, Habits, Journals and Notes in a single app.",
			"Four types of Habit Tracking.",
			"Track Todos, Habits, Journals and Notes with daily values.",
			"Update your Mood and Pictures in Journal and Notes section.",
			"Customize the app color.",
			"Notification and Reminders.",
			"Lock Pin"
		];
	}
}
