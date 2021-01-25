import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { EditorToolbarComponent } from './editor-toolbar/editor-toolbar.component';
import { EditorPaperComponent } from './editor-paper/editor-paper.component';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { Angulartics2Module } from 'angulartics2';

@NgModule({
  declarations: [EditorComponent, EditorToolbarComponent, EditorPaperComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    Angulartics2Module,
    EditorRoutingModule,
  ],
})
export class EditorModule {}
