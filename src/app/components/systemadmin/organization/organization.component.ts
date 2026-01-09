import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';import { OrganizationService } from '../../../services/organization/organization.service';
import { Organization } from '../../../models/organization/organization.model';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [
      CommonModule,
      SharedModule,
      MatTableModule,      // ✅ ESTO ERA LO QUE FALTABA
      MatPaginatorModule
    ],
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.scss'
})
export class OrganizationComponent {

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'type',
    'max_users',
    'owner_user_id',
    'is_active',
    // 'actions'
  ];

  dataSource = new MatTableDataSource<Organization>([]);

  loading = false;
  constructor(private OrganizationService: OrganizationService) {}

  ngOnInit(): void {
    this.loadUsers();
  }


  loadUsers(): void {
    this.loading = true;

    this.OrganizationService.getAllOrganizations().subscribe({
      next: (res) => {
        this.dataSource.data = res.data.map((u: Organization) => ({
          id: u.id,
          name: u.name,
          email: u.email,
          type: u.type,
          max_users: u.max_users,
          owner_user_id: u.owner_user_id,
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

    toggleStatus(organization: Organization): void {
      console.log('Toggle status', organization);
    }

    editUser(organization: Organization): void {
      console.log('Edit organization', organization);
    }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}