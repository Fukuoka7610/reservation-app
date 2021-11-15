import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // ここで、"app-root"と結びつけられているので、index.htmlから呼び出された時に"app.component.html"を表示させる
  templateUrl: './app.component.html', // selectorが呼び出された時に、ここで指定したURLが表示されるように案内される
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reservation-app';
}
