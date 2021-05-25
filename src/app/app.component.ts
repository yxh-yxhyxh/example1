import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour of heroes';

}
@Component({
  selector:'hello-world',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}