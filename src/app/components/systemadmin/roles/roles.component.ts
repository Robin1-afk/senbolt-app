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
    AngularDualListBoxModule, // IMPORTANTE
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  // ======== PERMISSIONS PANEL STATE ========
  selectedRoleId: number | null = null;
  selectedRoleName: string | null = null;
  permissionsLoading = false;

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

    // Dual list init
    this.refreshDualListFormat();

    // Cambios de idioma para dual list
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
  // ======== PERMISSIONS HELPERS ========
  private mapPermissionsToDualList(data: any[]): void {
    // Source: SIEMPRE todos los permisos (1 sola vez por visual)
    this.source = data.map((p: any, idx: number) => ({
      id: idx + 1,
      name: p.objeto_view,  // muestra description o nombre del VIEW
      value: p.objeto_view                  // por si luego lo usas para guardar
    }));

    // Confirmed: solo los has_permission = 1
    this.confirmed = this.source.filter((_, i) => !!data[i]?.has_permission);
  }

  onEditRole(role: Role): void {
    this.selectedRoleId = role.id;
    this.selectedRoleName = role.name;
    

    this.permissionsLoading = true;

    // si SOLO quieres visualizar, ponlo en true (bloquea mover permisos)
    // si quieres que se pueda mover, ponlo en false
    this.disabled = false;

    this.roleService.getRolesObjectId(role.id).subscribe({
      next: (res) => {
        const data = res?.data ?? [];
        this.mapPermissionsToDualList(data);
        this.permissionsLoading = false;
      },
      error: () => {
        this.source = [];
        this.confirmed = [];
        this.permissionsLoading = false;
      }
    });
  }

  closePermissionsPanel(): void {
    this.selectedRoleId = null;
    this.selectedRoleName = null;
    this.source = [];
    this.confirmed = [];
    this.permissionsLoading = false;
  }
}
