import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastrodevedoresPage } from './cadastrodevedores.page';

describe('CadastrodevedoresPage', () => {
  let component: CadastrodevedoresPage;
  let fixture: ComponentFixture<CadastrodevedoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrodevedoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrodevedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
