import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverid:string=this.generateRandomServerId();
  button_new=false;
  generateRandomServerId(): string {
    const randomId = Math.floor(1000 + Math.random() * 9000);
    return randomId.toString();
  }
  constructor(){
    setTimeout(()=>{this.button_new=true},2000)
}

  randomnumbergenerator(): void {
    // Call this method when saving, if needed
    this.serverid = this.generateRandomServerId();

  }

}
