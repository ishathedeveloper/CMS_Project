import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBLogComponent } from './create-blog.component';

describe('CreateBLogComponent', () => {
  let component: CreateBLogComponent;
  let fixture: ComponentFixture<CreateBLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
