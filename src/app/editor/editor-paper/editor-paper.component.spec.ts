import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPaperComponent } from './editor-paper.component';

describe('EditorPaperComponent', () => {
  let component: EditorPaperComponent;
  let fixture: ComponentFixture<EditorPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditorPaperComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
