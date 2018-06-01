import {Component, Input, OnInit} from '@angular/core';
import {BackendServiceService} from "../backend-service/backend-service.service";

@Component({
  selector: 'app-display-method-details',
  templateUrl: './display-method-details.component.html',
  styleUrls: ['./display-method-details.component.css']
})
export class DisplayMethodDetailsComponent implements OnInit {


  @Input() method;

  constructor(private backend: BackendServiceService) { }

  ngOnInit() {
    console.log('aaaa');
    console.log('method', this.method);
    // console.log('child id', this.method.str.valueOf().toString());
    this.backend.getFullMethodById(this.method.id).then(data => {
      console.log('data ', data);
    });
  }

}
