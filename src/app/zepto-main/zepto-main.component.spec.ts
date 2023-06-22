import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeptoMainComponent } from './zepto-main.component';

describe('ZeptoMainComponent', () => {
  let component: ZeptoMainComponent;
  let fixture: ComponentFixture<ZeptoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeptoMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeptoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
