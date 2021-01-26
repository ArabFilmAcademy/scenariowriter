import { Component, OnInit } from '@angular/core';
import { Line, Scenario } from '@app/scenario/scenario';
// @ts-ignore
import moment, { Moment } from 'moment';
import { LineType } from '@app/editor/line-type';
import { EditorService } from '@app/editor/editor.service'; // using @types/moment

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  scenario: Scenario;
  lineTypes: LineType[];
  transitionSuggestions: string[];
  constructor(private editorService: EditorService) {}

  ngOnInit(): void {
    this.editorService.getLineTypes().subscribe((lineTypes) => {
      this.lineTypes = lineTypes;
    });
    this.editorService.getTransitionSuggestions().subscribe((transitionSuggestions) => {
      this.transitionSuggestions = transitionSuggestions;
    });
    this.scenario = {} as Scenario;
    this.scenario.title = 'Untitled';
    this.scenario.content = [];
    this.scenario.content.push(this.newLine(this.transitionSuggestions[0], 0), this.newLine('', 1));
  }
  newLine(content: string, type_number: number) {
    let line: Line;
    line = {} as Line;
    line.content = content;
    line.type = this.lineTypes.find((lineType) => +lineType.id === type_number);
    line.added = moment(new Date());
    return line;
  }
}
