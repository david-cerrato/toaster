import { Component } from '@angular/core';
import { Toast } from './toaster/toaster.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr: Toast[] = []
  pos : 'top-left' | 'top-center' | 'top-right' | 'bottom-left' |'bottom-center' | 'bottom-right' = 'bottom-center' 
  title = 'toaster';

  addNew(newToast: Toast, pos: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' |'bottom-center' | 'bottom-right'){
    this.arr.push(newToast)
    this.pos = pos;
  }
}
