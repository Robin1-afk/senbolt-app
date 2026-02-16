import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { AngularDualListBoxModule, DualListComponent } from 'angular-dual-listbox';
import { Subject, takeUntil } from 'rxjs';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { I18nService } from '../../../core/services/i18n.service';
import { SharedModule } from '../../../shared/shared.module';
import { Role } from '../../../models/role/role.model';
import { RoleService } from '../../../services/rol/rol.service';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SharedModule,
    AngularDualListBoxModule, // ✅ IMPORTANTE
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  // ======== TABLA ========
  displayedColumns: string[] = [
    'id',
    'name',
    'organization_name',
    'is_system',
    'status',
    'actions',
  ];

  dataSource = new MatTableDataSource<Role>([]);
  loading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ======== DUAL LIST (roles-permision) ========
  keepSorted = true;
  filter = false;
  disabled = false;

  key = 'id';
  format: any = DualListComponent.DEFAULT_FORMAT;

  source: any[] = [];
  confirmed: any[] = [];

  display = (item: any) => `${item.name}`;

  constructor(private roleService: RoleService, public i18n: I18nService) {}

  ngOnInit(): void {
    this.loadRoles();

    this.dataSource.filterPredicate = (data: Role, filter: string) => {
      const dataStr = `
        ${data.id}
        ${data.name}
        ${data.organization_name}
        ${data.is_system ? 'true' : 'false'}
        ${data.is_active ? 'active' : 'inactive'}
      `.toLowerCase();
      return dataStr.includes(filter);
    };

    // ✅ Dual list init
    this.loadVisualData();
    this.refreshDualListFormat();

    // ✅ Cambios de idioma para dual list
    this.i18n.languageChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.refreshDualListFormat());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ======== SEARCH ========
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // ======== CARGA ROLES ========
  loadRoles(): void {
    this.loading = true;

    this.roleService.getAllRoles().subscribe({
      next: (res) => {
        this.dataSource.data = res.data.map((u: Role) => ({
          id: u.id,
          name: u.name,
          organization_name: u.organization_name,
          is_system: u.is_system,
          is_active: !!u.is_active,
        }));
        this.loading = false;
      },
      error: () => {
        this.dataSource.data = [];
        this.loading = false;
      }
    });
  }

  // ======== DUAL LIST HELPERS ========
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
