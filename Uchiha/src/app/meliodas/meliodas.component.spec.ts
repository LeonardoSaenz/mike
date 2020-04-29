import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeliodasComponent } from './meliodas.component';

describe('MeliodasComponent', () => {
  let component: MeliodasComponent;
  let fixture: ComponentFixture<MeliodasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeliodasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeliodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
