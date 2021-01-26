import { Injectable } from '@angular/core';
import { LineType } from '@app/editor/line-type';
import * as lineType from 'src/assets/data/line-type.json';
import * as transitionSuggestion from 'src/assets/data/transition.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  lineTypes: LineType[] = (lineType as any).default;
  transitionSuggestions: string[] = (transitionSuggestion as any).default;
  constructor() {}
  getLineTypes(): Observable<LineType[]> {
    return of(this.lineTypes);
  }
  getTransitionSuggestions(): Observable<string[]> {
    return of(this.transitionSuggestions);
  }
}
