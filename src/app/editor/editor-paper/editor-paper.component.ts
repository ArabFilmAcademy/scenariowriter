import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { SelectionChange } from '@angular/cdk/collections';

@Component({
  selector: 'app-editor-paper',
  templateUrl: './editor-paper.component.html',
  styleUrls: ['./editor-paper.component.scss'],
})
export class EditorPaperComponent implements OnInit {
  @Output() selected = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  // @HostListener('onSelectionChange', ['$event'])
  /* TODO: Detect the line type then assign it to the toolbar select*/
  @HostListener('click', ['$event'])
  @HostListener('window: keydown', ['$event'])
  lineType(event: Event) {
    // Todo:
    //  if the line is p get the class name
    //  else get the parent element if p get the class
    //  suggestion switch the class to data-type or line-type
    console.log('line type class', getSelection().anchorNode.parentElement.tagName);
  }
}
