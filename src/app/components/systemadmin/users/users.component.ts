import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


import { SharedModule } from '../../../shared/shared.module';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../models/user/user.model';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'rol_id',
    'organization_id',
    'is_active'
    // 'actions'
  ];

  dataSource = new MatTableDataSource<User>([]);

  loading = false;
  constructor(private userService: UserService, public i18n: I18nService) {}

  ngOnInit(): void {
    this.loadUsers();

    this.dataSource.filterPredicate = (data: User, filter: string) => {
      const dataStr = `
        ${data.id}
        ${data.name}
        ${data.email}
        ${data.rol_id}
        ${data.organization_id}
        ${data.is_active ? 'active' : 'inactive'}
      `.toLowerCase();

      return dataStr.includes(filter);
    };
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

loadUsers(): void {
  this.loading = true;

  this.userService.getAllUsers().subscribe({
    next: (res) => {
      this.dataSource.data = res.data.map((u: User) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        rol_id: u.rol_id,
        organization_id: u.organization_id,
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

  toggleStatus(user: User): void {
    console.log('Toggle status', user);
  }

  editUser(user: User): void {
    console.log('Edit user', user);
  }

@ViewChild(MatPaginator) paginator!: MatPaginator;
ngAfterViewInit(): void {
  this.dataSource.paginator = this.paginator;
}
  
}
