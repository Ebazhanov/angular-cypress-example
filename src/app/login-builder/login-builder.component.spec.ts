import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBuilderComponent } from './login-builder.component';

describe('LoginBuilderComponent', () => {
  let component: LoginBuilderComponent;
  let fixture: ComponentFixture<LoginBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
