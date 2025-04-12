import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermovieComponent } from './usermovie.component';

describe('UsermovieComponent', () => {
  let component: UsermovieComponent;
  let fixture: ComponentFixture<UsermovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsermovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
