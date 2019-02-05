import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMS';
  constructor(private _route: Router){
    this._route.navigate(['employeelist']);
  }
}
