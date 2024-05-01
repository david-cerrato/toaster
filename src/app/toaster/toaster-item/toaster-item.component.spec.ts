import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterItemComponent } from './toaster-item.component';

describe('ToasterItemComponent', () => {
  let component: ToasterItemComponent;
  let fixture: ComponentFixture<ToasterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToasterItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToasterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
