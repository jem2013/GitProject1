import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JennaFirstPage } from './jenna-first.page';

describe('JennaFirstPage', () => {
  let component: JennaFirstPage;
  let fixture: ComponentFixture<JennaFirstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JennaFirstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
