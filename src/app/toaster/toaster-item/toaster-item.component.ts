import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Toast } from '../toaster.interface';

@Component({
  selector: 'app-toaster-item',
  templateUrl: './toaster-item.component.html',
  styleUrls: ['./toaster-item.component.css']
})
export class ToasterItemComponent {
  @Input() toastItem: Toast = { msg: '', type: 'default' };
  @Input() visible: boolean = false;
  @Input() lastBox1: boolean = false;
  @Input() lastBox2: boolean = false;
  @Input() lastBox3: boolean = false;
  @Input() duration!: number;
  @Input() position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' |'bottom-center' | 'bottom-right' = 'bottom-center';
  @Output() delete: EventEmitter<any> = new EventEmitter();
  lifeEnd: boolean = false;

  ngOnChanges(){
    this.renderer.setStyle(document.documentElement, '--time', `${this.duration}ms`);
    setTimeout(() => {
      this.lifeEnd = true;
    }, this.duration);
    setTimeout(() => {
      this.delete.emit();
    }, this.duration+100);
  }

  constructor(private renderer: Renderer2) {

  }

  deleteMsg() {
    this.delete.emit();
  }
}
