import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-dyamic-footer-content',
  //templateUrl: './dyamic-footer-content.component.html',
  template: `<div *ngIf="selectedLink === 'ARentingSystem'">
  <h2>About Us</h2>
  <p>This is the About Us page. Welcome!</p>
</div>
<div *ngIf="selectedLink === 'contact-us'">
  <h2>Contact Us</h2>
  <p>Feel free to reach out to us. We'd love to hear from you!</p>
</div>`,
  //styleUrls: ['./dyamic-footer-content.component.css'],
  styles:[`div {
    margin-top: 20px;
  }`]
})
export class DyamicFooterContentComponent {
  @Input() selectedLink:string = '';
  ngOnChanges() {
    console.log('Selected Link:', this.selectedLink);
  }
}
