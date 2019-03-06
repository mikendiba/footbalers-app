import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.css']
})
export class AppComponent {
  title = '21st Century Top Footballers';
 hide_message(): void {
  const x = document.getElementById('messages');
  const valueBtn = document.getElementById('hideBtn');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    valueBtn.textContent = 'Hide Messages';

  } else {
    x.style.display = 'none';
    valueBtn.textContent = 'Show Messages';

  }
}

}
