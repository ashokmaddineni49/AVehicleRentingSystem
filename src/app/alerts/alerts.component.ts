import { Component } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {
  buttonClicked = false;
  

  submitForm() {
    const userInput = window.prompt('Enter something:');
    
    // Check if user entered something
    if (userInput !== null) {
      console.log('User Input:', userInput);
    } else {
      console.log('User canceled the input.');
    }
    
  }
showAlert(){
    alert('Button Clicked');
    this.buttonClicked=true;
  } 

}
