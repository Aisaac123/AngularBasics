import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCharComponent } from './delete-char.component';

describe('DeleteCharComponent', () => {
  let component: DeleteCharComponent;
  let fixture: ComponentFixture<DeleteCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteCharComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
