import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { SubscriptionService } from '../../../services/subscription/subscription.service';
import { Subscription } from '../../../models/subscription/subscription.model';
import { I18nService } from '../../../core/services/i18n.service';


@Component({
  selector: 'app-subscription',
  imports: [
      CommonModule,
      SharedModule,
      MatTableModule, 
      MatPaginatorModule
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent {
  displayedColumns: string[] = [
    'id',
    'organization_id',
    'plan',
    'start_date',
    'end_date',
    'is_active',
  ];
  dataSource = new MatTableDataSource<Subscription>([]);
  loading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private SubscriptionService: SubscriptionService, public i18n: I18nService) {}

  ngOnInit(): void {
    this.loadSubscriptions();

    this.dataSource.filterPredicate = (data: Subscription, filter: string) => {
      const dataStr = `
        ${data.id}
        ${data.organization_id}
        ${data.plan_id}
        ${data.start_date}
        ${data.end_date}
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
  loadSubscriptions(): void {
    this.loading = true;

    this.SubscriptionService.getAllSubscriptions().subscribe({
      next: (res) => {
        console.log(res); 
        this.dataSource.data = res.data.map((u: Subscription) => ({
          id: u.id,
          organization_id: u.organization_id,
          plan_id: u.plan_id,
          start_date: u.start_date,
          end_date: u.end_date,
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

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
