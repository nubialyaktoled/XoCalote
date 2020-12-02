import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatchnotesPage } from './patchnotes.page';

describe('PatchnotesPage', () => {
  let component: PatchnotesPage;
  let fixture: ComponentFixture<PatchnotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchnotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatchnotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
