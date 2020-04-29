import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharinganComponent } from './sharingan.component';

describe('SharinganComponent', () => {
  let component: SharinganComponent;
  let fixture: ComponentFixture<SharinganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharinganComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharinganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
