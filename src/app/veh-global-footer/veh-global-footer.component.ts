import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veh-global-footer',
  templateUrl: './veh-global-footer.component.html',
  styleUrls: ['./veh-global-footer.component.css']
})
export class VehGlobalFooterComponent {

  selectedLink: string = '';


  constructor(private router: Router) {}

  navigateTo(link: string): void {
    // Set the selected link 
    this.selectedLink = link;
    console.log(link);
    // Navigate to the corresponding URL
    switch (link) {
      case 'ARentingSystem':
        this.router.navigateByUrl('/ARentingSystem'); // Adjust the route accordingly
        break;
      case 'contact-us':
        this.router.navigateByUrl('/contact-us'); // Adjust the route accordingly
        break;
      // Add more cases for other links...
      default:
        break;
    }
  }
}
