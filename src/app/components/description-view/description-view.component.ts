import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'description-view',
  templateUrl: './description-view.component.html',
  styleUrls: ['./description-view.component.scss']
})
export class DescriptionViewComponent implements OnChanges {
	@Input() imageDirection: 'left' | 'right' = 'left';
	@Input() imageUrl: string;
	@Input() marginTop = '10rem';

	isChecked = true
	flexDirection: string = 'row';

	accordions = {
		feature1: false,
		feature2: true,
		feature3: true
	}

	constructor() { }

	ngOnChanges(changes: SimpleChanges) {
		if (this.imageDirection === 'left') 
		{
			this.flexDirection = 'row'
		}  
		else {
			this.flexDirection = 'row-reverse'
		} 
	}

	onToggle(type: string): void {
		this.accordions[type] = !this.accordions[type];

		console.log(this.accordions);
	}

	getAccordionState(type): boolean {
		return this.accordions[type];
	}
}
