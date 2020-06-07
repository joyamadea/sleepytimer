import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepNowPage } from './sleep-now.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('SleepNowPage', () => {
  let component: SleepNowPage;
  let fixture: ComponentFixture<SleepNowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepNowPage ],
      imports: [RouterTestingModule, IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepNowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
