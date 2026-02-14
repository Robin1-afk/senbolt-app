import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularDualListBoxModule, DualListComponent } from 'angular-dual-listbox';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../../core/services/i18n.service';
import { SharedModule } from '../../../shared/shared.module';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, AngularDualListBoxModule, SharedModule],
  templateUrl: './roles-permision.component.html',
  styleUrl: './roles-permision.component.scss'
})
export class RolesPermisionComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  keepSorted = true;
  filter = false;
  disabled = false;

  key = 'id';
  format: any = DualListComponent.DEFAULT_FORMAT;

  source: any[] = [];
  confirmed: any[] = [];

  display = (item: any) => `${item.name}`;

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.loadVisualData();
    this.refreshDualListFormat();

    // ✅ escucha cambios de idioma (ajusta el nombre según tu I18nService)
    this.i18n.languageChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.refreshDualListFormat();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private refreshDualListFormat(): void {
    this.format = {
      add: this.i18n.translate('roles.duallist.add'),
      remove: this.i18n.translate('roles.duallist.remove'),
      all: this.i18n.translate('roles.duallist.all'),
      none: this.i18n.translate('roles.duallist.none'),
      direction: 'left-to-right',
      draggable: true,
      locale: undefined
    };
  }

  private loadVisualData() {
    this.source = [
      { id: 1, name: 'Usuarios' },
      { id: 2, name: 'Roles' },
      { id: 3, name: 'Permisos' },
      { id: 4, name: 'Organizaciones' },
      { id: 5, name: 'Planes' },
      { id: 6, name: 'Suscripciones' }
    ];

    this.confirmed = [this.source[1], this.source[2]];
  }
}
