import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Toast } from '../toaster.interface';

@Component({
  selector: 'app-toaster-item',
  templateUrl: './toaster-item.component.html',
  styleUrls: ['./toaster-item.component.css']
})
export class ToasterItemComponent {
  @Input() toastItem: Toast = { msg: '', type: 'default', id: '' };
  @Input() visible: boolean = false;
  @Input() lastBox1: boolean = false;
  @Input() lastBox2: boolean = false;
  @Input() lastBox3: boolean = false;
  @Input() duration!: number;
  @Input() position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' |'bottom-center' | 'bottom-right' = 'bottom-center';
  @Output() delete: EventEmitter<Toast> = new EventEmitter();
  lifeEnd: boolean = false;

  ngOnChanges(){
    setTimeout(() => {
      this.lifeEnd = true;
    }, this.duration);
    setTimeout(() => {
      this.delete.emit();
    }, this.duration+100);
  }

  constructor() {
  }
}
