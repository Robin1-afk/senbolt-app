import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    SharedModule,
    AngularDualListBoxModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit, OnDestroy, AfterViewInit {

  private destroy$ = new Subject<void>();

  // ======== PERMISSIONS PANEL STATE ========
  selectedRoleId: number | null = null;
  selectedRoleName: string | null = null;
  permissionsLoading = false;
  savingPermissions = false;

  // ======== CREATE ROLE STATE ========
  isCreatingRole = false;
  creatingRole = false;
  newRoleName = '';
  newRoleDescription = '';
  newRoleIsActive = 1;
  newRoleIsSystem = 0;

  // ======== EDIT ROLE STATE ========
  editRoleName = '';
  editRoleDescription = '';
  editRoleIsActive = 1;
  editRoleIsSystem = 0;
  updatingRole = false;

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

  // ======== DUAL LIST ========
  keepSorted = true;
  filter = false;
  disabled = false;

  key = 'id';
  format: any = DualListComponent.DEFAULT_FORMAT;

  source: any[] = [];
  confirmed: any[] = [];

  display = (item: any) => `${item.name}`;

  constructor(
    private roleService: RoleService,
    public i18n: I18nService
  ) {}

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

    this.refreshDualListFormat();

    this.i18n.languageChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.refreshDualListFormat());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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

  private resetCreateState(): void {
    this.newRoleName = '';
    this.newRoleDescription = '';
    this.newRoleIsActive = 1;
    this.newRoleIsSystem = 0;
    this.creatingRole = false;
  }

  private resetEditState(): void {
    this.editRoleName = '';
    this.editRoleDescription = '';
    this.editRoleIsActive = 1;
    this.editRoleIsSystem = 0;
    this.updatingRole = false;
  }

  private resetPermissionsState(): void {
    this.source = [];
    this.confirmed = [];
    this.permissionsLoading = false;
    this.savingPermissions = false;
    this.disabled = false;
  }

  startCreateRole(): void {
    this.selectedRoleId = null;
    this.selectedRoleName = null;

    this.resetPermissionsState();
    this.resetEditState();
    this.resetCreateState();

    this.isCreatingRole = true;
  }

  createRole(): void {
    if (!this.newRoleName.trim()) {
      return;
    }

    const payload = {
      name: this.newRoleName.trim(),
      description: this.newRoleDescription.trim() || 'Sin descripción',
      is_active: this.newRoleIsActive,
      is_system: this.newRoleIsSystem
    };

    this.creatingRole = true;

    this.roleService.registerRole(payload).subscribe({
      next: (res) => {
        const createdRole = res?.data;

        this.isCreatingRole = false;
        this.creatingRole = false;

        this.selectedRoleId = createdRole?.id ?? createdRole?.rol_id ?? createdRole?.role_id ?? null;
        this.selectedRoleName = createdRole?.name ?? payload.name;

        this.editRoleName = payload.name;
        this.editRoleDescription = payload.description;
        this.editRoleIsActive = payload.is_active;
        this.editRoleIsSystem = payload.is_system;

        this.loadRoles();

        if (this.selectedRoleId) {
          this.permissionsLoading = true;
          this.disabled = false;

          this.roleService.getRolesObjectId(this.selectedRoleId).subscribe({
            next: (permissionsRes) => {
              const data = permissionsRes?.data ?? [];
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
      },
      error: (err) => {
        console.error('Error al crear rol', err);
        this.creatingRole = false;
      }
    });
  }

  updateRole(): void {
    if (!this.selectedRoleId) {
      return;
    }

    if (!this.editRoleName.trim()) {
      return;
    }

    const payload = {
      id: this.selectedRoleId,
      name: this.editRoleName.trim(),
      description: this.editRoleDescription.trim() || 'Sin descripción',
      is_active: this.editRoleIsActive,
      is_system: this.editRoleIsSystem
    };

    this.updatingRole = true;

    this.roleService.updateRole(payload).subscribe({
      next: (res) => {
        console.log('Rol actualizado correctamente', res);

        this.selectedRoleName = payload.name;
        this.loadRoles();

        this.updatingRole = false;
      },
      error: (err) => {
        console.error('Error al actualizar rol', err);
        this.updatingRole = false;
      }
    });
  }

  private mapPermissionsToDualList(data: any[]): void {
    this.source = data.map((p: any, idx: number) => ({
      id: idx + 1,
      name: p.description || p.objeto_view,
      objeto_view: p.objeto_view,
      description: p.description,
      key_view: p.key_permission,
      has_permission: !!p.has_permission,
      id_rol: p.id_rol
    }));

    this.confirmed = this.source.filter((item: any) => item.has_permission);
  }

  onEditRole(role: Role): void {
    this.isCreatingRole = false;

    this.selectedRoleId = role.id;
    this.selectedRoleName = role.name;

    this.permissionsLoading = true;
    this.disabled = false;

    this.resetEditState();
    this.source = [];
    this.confirmed = [];

    this.roleService.getRolById(role.id).subscribe({
      next: (res) => {
        const rol = res?.data;

        this.editRoleName = rol?.name ?? '';
        this.editRoleDescription = rol?.description ?? '';
        this.editRoleIsActive = Number(rol?.is_active) === 1 ? 1 : 0;
        this.editRoleIsSystem = Number(rol?.is_system) === 1 ? 1 : 0;

        this.selectedRoleName = this.editRoleName || role.name;
      },
      error: (err) => {
        console.error('Error al cargar información del rol', err);
        this.resetEditState();
      }
    });

    this.roleService.getRolesObjectId(role.id).subscribe({
      next: (res) => {
        const data = res?.data ?? [];
        this.mapPermissionsToDualList(data);
        this.permissionsLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar permisos del rol', err);
        this.source = [];
        this.confirmed = [];
        this.permissionsLoading = false;
      }
    });
  }

  private buildPermissionsPayload(): { key_view: number; is_active: number }[] {
    const confirmedIds = new Set(this.confirmed.map((item: any) => item.id));
    const uniqueMap = new Map<number, { key_view: number; is_active: number }>();

    this.source
      .filter((item: any) => item.key_view !== null && item.key_view !== undefined)
      .forEach((item: any) => {
        const keyView = Number(item.key_view);
        const isActive = confirmedIds.has(item.id) ? 1 : 0;

        uniqueMap.set(keyView, {
          key_view: keyView,
          is_active: isActive
        });
      });

    return Array.from(uniqueMap.values());
  }

  savePermissions(): void {
    if (!this.selectedRoleId) return;

    const permissions = this.buildPermissionsPayload();

    const payload = {
      rol_id: this.selectedRoleId,
      permissions
    };

    this.savingPermissions = true;

    this.roleService.updatePermissions(payload).subscribe({
      next: (res) => {
        console.log('Permisos actualizados correctamente', res);

        this.roleService.getRolesObjectId(this.selectedRoleId as number).subscribe({
          next: (refreshRes) => {
            const data = refreshRes?.data ?? [];
            this.mapPermissionsToDualList(data);
            this.savingPermissions = false;
          },
          error: () => {
            this.savingPermissions = false;
          }
        });
      },
      error: (err) => {
        console.error('Error al actualizar permisos', err);
        this.savingPermissions = false;
      }
    });
  }

  closePermissionsPanel(): void {
    this.selectedRoleId = null;
    this.selectedRoleName = null;

    this.isCreatingRole = false;
    this.creatingRole = false;

    this.resetCreateState();
    this.resetEditState();
    this.resetPermissionsState();
  }

  toggleNewRoleSystem(): void {
    this.newRoleIsSystem = this.newRoleIsSystem === 1 ? 0 : 1;
  }

  toggleEditRoleSystem(): void {
    this.editRoleIsSystem = this.editRoleIsSystem === 1 ? 0 : 1;
  }

  toggleEditRoleActive(): void {
    this.editRoleIsActive = this.editRoleIsActive === 1 ? 0 : 1;
  }
}