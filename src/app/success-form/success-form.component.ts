import { Component, OnInit } from '@angular/core';

import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-success-form',
  templateUrl: './success-form.component.html',
  styleUrls: ['./success-form.component.css']
})
export class SuccessFormComponent implements OnInit {

  clientName = '';
  totalPrice = 0;

  constructor(private mService: AppServiceService) { }

  ngOnInit(): void {
    this.clientName = this.mService.clientName;
    this.totalPrice = this.mService.totalPrice
  }

}
