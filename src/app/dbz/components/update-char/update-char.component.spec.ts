import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCharComponent } from './update-char.component';

describe('UpdateCharComponent', () => {
  let component: UpdateCharComponent;
  let fixture: ComponentFixture<UpdateCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCharComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
