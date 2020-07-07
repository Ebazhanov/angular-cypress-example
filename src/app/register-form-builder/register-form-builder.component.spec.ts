import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormBuilderComponent } from './register-form-builder.component';

describe('RegisterFormBuilderComponent', () => {
  let component: RegisterFormBuilderComponent;
  let fixture: ComponentFixture<RegisterFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
