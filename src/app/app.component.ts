import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mevolve';
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

}
