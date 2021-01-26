import { Component, Input, OnInit } from '@angular/core';
import { EditorService } from '@app/editor/editor.service';
import { LineType } from '@app/editor/line-type';
import { finalize } from 'rxjs/operators';
import { Scenario } from '@app/scenario/scenario';

@Component({
  selector: 'app-editor-toolbar',
  templateUrl: './editor-toolbar.component.html',
  styleUrls: ['./editor-toolbar.component.scss'],
})
export class EditorToolbarComponent implements OnInit {
  @Input() scenario?: Scenario;
  lintTypes: LineType[];
  isLoading: boolean = false;
  selected: string = 'scene-heading';
  constructor(private editorService: EditorService) {}

  ngOnInit(): void {
    this.editorService
      .getLineTypes()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((lintTypes) => {
        this.isLoading = true;
        this.lintTypes = lintTypes;
      });
  }
}
