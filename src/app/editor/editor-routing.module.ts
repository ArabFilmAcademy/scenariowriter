import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { EditorComponent } from '@app/editor/editor.component';
import { extract } from '@app/i18n';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/editor', pathMatch: 'full' },
    { path: 'editor', component: EditorComponent, data: { title: extract('Editor') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorRoutingModule {}
