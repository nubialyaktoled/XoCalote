import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevedoresPage } from './devedores.page';

describe('DevedoresPage', () => {
  let component: DevedoresPage;
  let fixture: ComponentFixture<DevedoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevedoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
