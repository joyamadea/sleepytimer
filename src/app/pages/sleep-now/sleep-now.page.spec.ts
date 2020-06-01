import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepNowPage } from './sleep-now.page';

describe('SleepNowPage', () => {
  let component: SleepNowPage;
  let fixture: ComponentFixture<SleepNowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepNowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepNowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
