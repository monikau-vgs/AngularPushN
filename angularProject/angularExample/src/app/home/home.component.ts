import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector:'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   public minDate: Date = new Date ("01/01/2010");
    public maxDate: Date = new Date ("01/01/2030");
    public value: Date = new Date ("05/16/2017");
    constructor ( private router: Router) {}

    add_engagement(){
      console.log("add new");
      this.router.navigate(['./engagement']);
    }
}
