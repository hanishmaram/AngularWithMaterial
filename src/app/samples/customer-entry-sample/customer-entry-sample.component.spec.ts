import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEntrySampleComponent } from './customer-entry-sample.component';

describe('CustomerEntrySampleComponent', () => {
  let component: CustomerEntrySampleComponent;
  let fixture: ComponentFixture<CustomerEntrySampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerEntrySampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEntrySampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
