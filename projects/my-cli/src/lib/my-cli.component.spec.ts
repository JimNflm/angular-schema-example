import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCliComponent } from './my-cli.component';

describe('MyCliComponent', () => {
  let component: MyCliComponent;
  let fixture: ComponentFixture<MyCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
