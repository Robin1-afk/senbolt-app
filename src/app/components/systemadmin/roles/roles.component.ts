import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AngularDualListBoxModule, DualListComponent } from 'angular-dual-listbox';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../../core/services/i18n.service';
import { SharedModule } from '../../../shared/shared.module';
import { Subject, takeUntil } from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Role } from '../../../models/role/role.model';
import { RoleService } from '../../../services/rol/rol.service';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [      
        CommonModule,
        SharedModule,
        MatTableModule,      // ✅ ESTO ERA LO QUE FALTABA
        MatPaginatorModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent{

  displayedColumns: string[] = [
    'id',
    'name',
    'organization_name',
    'is_system',
    'status',
    'actions'
  ];

  dataSource = new MatTableDataSource<Role>([]);

  loading = false;
  constructor(private RoleService: RoleService, public i18n: I18nService) {}
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
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadRoles(): void {
    this.loading = true;

    this.RoleService.getAllRoles().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource.data = res.data.map((u: Role) => ({
          id: u.id,
          name: u.name,
          organization_name: u.organization_name,
          is_system: u.is_system,
          is_active: !!u.is_active
        }));
        this.loading = false;
      },
      error: () => {
        this.dataSource.data = [];
        this.loading = false;
      }
    });
  }

  toggleStatus(role: Role): void {
    // Lógica para activar/desactivar el rol
  }

  editRole(role: Role): void {
    // Lógica para editar el rol
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
