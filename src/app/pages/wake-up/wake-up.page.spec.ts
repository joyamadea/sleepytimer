import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WakeUpPage } from './wake-up.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('WakeUpPage', () => {
  let component: WakeUpPage;
  let fixture: ComponentFixture<WakeUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakeUpPage ],
      imports: [RouterTestingModule,IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WakeUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
