import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'customize-view',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeViewComponent implements OnInit, OnChanges {

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
