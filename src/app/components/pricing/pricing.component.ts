import { Component } from '@angular/core';
import { PricePlan } from 'src/app/models/models';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
	pricing: PricePlan[] = [];
	offers: any[] = [];
	
	constructor() {
		this.pricing = [
			{ price: 0, type: 'Free', duration: 'For 30 days' },
			{ price: 2.99, type: 'Per Month', duration: 'Monthly Billing' },
			{ price: 3.99, type: 'Per Year', duration: 'Yearly Billing' },
		];

		this.offers = [
			{ title: 'Add Todos, Habits, Journals and Notes in a single app.', image: '/assets/images/add.png' },
			{ title: 'Four types of Habit Tracking.', image: '/assets/images/track.png' },
			{ title: 'Track Todos, Habits, Journals and Notes with daily values.', image: '/assets/images/bar.png' },
			{ title: 'Update your Mood and Pictures in Journal and Notes section.', image: '/assets/images/emoji.png' },
			{ title: 'Customize the app color.', image: '/assets/images/mind.png' },
			{ title: 'Notification and Reminders.', image: '/assets/images/bell.png' },
			{ title: 'Lock Pin.', image: '/assets/images/lock.png' }
		];
	}
}
