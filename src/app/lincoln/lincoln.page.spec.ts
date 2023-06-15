import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LincolnPage } from './lincoln.page';

describe('LincolnPage', () => {
  let component: LincolnPage;
  let fixture: ComponentFixture<LincolnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LincolnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
