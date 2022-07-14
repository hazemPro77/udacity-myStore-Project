import { Component } from '@angular/core';

import { AppServiceService } from '../app/services/app-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myStore';

  constructor(private mService:AppServiceService) {
    mService.fetchProducts().subscribe();
  }
}
