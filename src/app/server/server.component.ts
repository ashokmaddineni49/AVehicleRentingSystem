import { Component } from "@angular/core";

@Component({
    selector:'app-server',
   templateUrl :'./server.component.html',
   styleUrls:['./server.component.css'],
   styles: [`
    h2 {
      color: magenta;
      text-decoration: underline;
    }
  `]
})
export class ServerComponent{
  userName='';
  addedusername='';

addUserName(){
  this.addedusername=this.userName;
  console.log(this.addedusername);
}
onUpdateusername(event:Event){
  this.userName=(<HTMLInputElement>event.target).value;
console.log(event);
}
reset(){
  this.userName='';
}

}