import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NEHomepagePage } from './nehomepage.page';

describe('NEHomepagePage', () => {
  let component: NEHomepagePage;
  let fixture: ComponentFixture<NEHomepagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NEHomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
