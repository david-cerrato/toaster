import { Component } from '@angular/core';
import { Toast } from './toaster/toaster.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr: Toast[] = []
  title = 'toaster';

  addNew(newToast: Toast){
    this.arr.push(newToast)
  }
}
