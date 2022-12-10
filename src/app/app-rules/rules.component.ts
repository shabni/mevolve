import { Component } from '@angular/core';
import { AppRule } from '../models/models';


@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {
	appRules: AppRule[] = [];

	constructor() {
		this.appRules = [
			{ image: '/assets/images/ic1.png', title: 'To-Do List' },
			{ image: '/assets/images/ic2.png', title: 'Habit Tracker' },
			{ image: '/assets/images/ic3.png', title: 'Journaling' },
			{ image: '/assets/images/ic4.png', title: 'Notes' },
			{ image: '/assets/images/ic5.png', title: 'Lists' },
		]
	}
}
