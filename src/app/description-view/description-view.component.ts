import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'description-view',
  templateUrl: './description-view.component.html',
  styleUrls: ['./description-view.component.scss']
})
export class DescriptionViewComponent implements OnInit, OnChanges {

  @Input() imageDirection :'left' |'right' ='left'
  @Input() imageUrl: string
  isChecked = true

  flexDirection: string = 'row'

  constructor() { }

  

  ngOnChanges(changes: SimpleChanges){

    if (this.imageDirection === 'left') {
      this.flexDirection = 'row'
    }  else {
      this.flexDirection = 'row-reverse'
    } 
  }

  ngOnInit(): void {

    console.log("++--->>")
  }

}
