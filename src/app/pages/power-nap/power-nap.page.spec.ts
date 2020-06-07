import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PowerNapPage } from './power-nap.page';

import { RouterTestingModule } from '@angular/router/testing';

describe('PowerNapPage', () => {
  let component: PowerNapPage;
  let fixture: ComponentFixture<PowerNapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerNapPage ],
      imports: [RouterTestingModule, IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PowerNapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
