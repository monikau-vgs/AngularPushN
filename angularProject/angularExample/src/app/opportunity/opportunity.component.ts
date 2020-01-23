import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  continue_click(){
    console.log("in oppoo");
      this.router.navigate(['./search']);
  }
}
