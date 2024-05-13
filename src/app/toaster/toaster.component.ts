import { Component, Input } from '@angular/core';
import { Toast } from './toaster.interface';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent {
  @Input() msgArr: Toast[] = [];
  @Input() duration: number = 2000;
  @Input() position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' |'bottom-center' | 'bottom-right' = 'bottom-center'

  AddNew(newToast: Toast) {
    this.msgArr.push(newToast);
  }

  deleteMsg(i: number) {
    this.msgArr.splice(i, 1);
  }
}
