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

	constructor() { }

	ngOnChanges(changes: SimpleChanges){

		if (this.imageDirection === 'left') 
		{
			this.flexDirection = 'row'
		}  
		else {
			this.flexDirection = 'row-reverse'
		} 
	}
}
