import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {IMyDpOptions} from 'mydatepicker';
@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.css']
})
export class EngagementComponent implements OnInit {

    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    // Initialized to specific date (09.10.2018).
    public model: any = { date: { year: 2018, month: 10, day: 9 } };
    constructor( private router: Router) { }

  ngOnInit() {
  }
  continue_click(){
    console.log("in con");
    this.router.navigate(['./opportunity']);
  }

}
