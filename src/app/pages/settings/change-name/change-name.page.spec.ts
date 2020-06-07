import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeNamePage } from './change-name.page';

describe('ChangeNamePage', () => {
  let component: ChangeNamePage;
  let fixture: ComponentFixture<ChangeNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeNamePage ],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
