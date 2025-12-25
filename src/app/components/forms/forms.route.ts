import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'forms',children:[
    {
      path: 'form-advanced',
      loadComponent: () =>
        import('./form-advanced/form-advanced.component').then((m) => m.FormAdvancedComponent),
    },
    {
      path: 'form-elements/checks-radios',
      loadComponent: () =>
        import('./form-elements/checks-radios/checks-radios.component').then((m) => m.ChecksRadiosComponent),
    },
    {
      path: 'form-elements/color-pickers',
      loadComponent: () =>
        import('./form-elements/color-pickers/color-pickers.component').then((m) => m.ColorPickersComponent),
    },
    {
      path: 'form-elements/date-time-picker',
      loadComponent: () =>
        import('./form-elements/date-time-picker/date-time-picker.component').then((m) => m.DateTimePickerComponent),
    },
    {
      path: 'form-elements/file-uploads',
      loadComponent: () =>
        import('./form-elements/file-uploads/file-uploads.component').then((m) => m.FileUploadsComponent),
    },
    {
      path: 'form-elements/form-select',
      loadComponent: () =>
        import('./form-elements/form-select/form-select.component').then((m) => m.FormSelectComponent),
    },
    {
      path: 'form-elements/input-groups',
      loadComponent: () =>
        import('./form-elements/input-groups/input-groups.component').then((m) => m.InputGroupsComponent),
    },
    {
      path: 'form-elements/input-masks',
      loadComponent: () =>
        import('./form-elements/input-masks/input-masks.component').then((m) => m.InputMasksComponent),
    },
    {
      path: 'form-elements/inputs',
      loadComponent: () =>
        import('./form-elements/inputs/inputs.component').then((m) => m.InputsComponent),
    },
    {
      path: 'form-elements/range-sliders',
      loadComponent: () =>
        import('./form-elements/range-sliders/range-sliders.component').then((m) => m.RangeSlidersComponent),
    },
    {
      path: 'form-layouts',
      loadComponent: () =>
        import('./form-layouts/form-layouts.component').then((m) => m.FormLayoutsComponent),
    },
    {
      path: 'form-editors/angular-editor',
      loadComponent: () =>
        import('./form-editors/quill-editor/quill-editor.component').then((m) => m.QuillEditorComponent),
    },
    {
      path: 'validation',
      loadComponent: () =>
        import('./validations/validations.component').then((m) => m.ValidationsComponent),
    },
    {
      path: 'ng-select',
      loadComponent: () =>
        import('./ng-select/ng-select.component').then((m) => m.NgSelectComponent),
    }
  ]}

];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class formsRoutingModule {
  static routes = admin;
}