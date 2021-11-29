import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public visible = false

public contador = 0

toggle(){
  this.visible = !this.visible
}

sumauno() {
  this.contador++
}


}
