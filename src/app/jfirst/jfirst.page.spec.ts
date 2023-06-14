import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JfirstPage } from './jfirst.page';

describe('JfirstPage', () => {
  let component: JfirstPage;
  let fixture: ComponentFixture<JfirstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JfirstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
