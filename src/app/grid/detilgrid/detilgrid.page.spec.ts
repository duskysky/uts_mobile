import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetilgridPage } from './detilgrid.page';

describe('DetilgridPage', () => {
  let component: DetilgridPage;
  let fixture: ComponentFixture<DetilgridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetilgridPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetilgridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
