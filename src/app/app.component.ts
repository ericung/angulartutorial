import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { HousingLocation } from './housinglocation';
import { HousingService } from './housing.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello World! First App';

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}

