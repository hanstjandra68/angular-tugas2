import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  nama=["Hans","budi","ilham"];
  penjelasan=["Pinter","ganteng","laso"];


  constructor
    (private router:Router){}

  goEdit(){
    this.router.navigate(['/edit']);
  }
  goList(){
    this.router.navigate([
      '/list'
    ]);
  }
  goInput(){
    this.router.navigate([
      '/input'
    ]);
  }
}
