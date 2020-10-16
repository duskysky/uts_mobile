import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetilitemPage } from './detilitem.page';

describe('DetilitemPage', () => {
  let component: DetilitemPage;
  let fixture: ComponentFixture<DetilitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetilitemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetilitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
