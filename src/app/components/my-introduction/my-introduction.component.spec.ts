import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIntroductionComponent } from './my-introduction.component';

describe('MyIntroductionComponent', () => {
  let component: MyIntroductionComponent;
  let fixture: ComponentFixture<MyIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyIntroductionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
