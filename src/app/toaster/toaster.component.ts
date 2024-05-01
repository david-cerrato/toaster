import { Component, Input } from '@angular/core';
import { Toast } from './toaster.interface';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent {
  @Input() msgArr: Toast[] = [];
  @Input() duration: number = 5000;

  AddNew(newToast: Toast) {
    this.msgArr.push(newToast);
  }

  deleteMsg(i: number) {
    this.msgArr.splice(i, 1);
  }
}
