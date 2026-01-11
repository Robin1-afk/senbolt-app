import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';import { PlanService } from '../../../services/plan/plan.service';
import { Plan } from '../../../models/plan/plan.model';
import { I18nService } from '../../../core/services/i18n.service';


// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [
      CommonModule,
      SharedModule,
      MatTableModule,      // ✅ ESTO ERA LO QUE FALTABA
      MatPaginatorModule
    ],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {

  displayedColumns: string[] = [
    // 'id',
    'name',
    'description',
    'emails_per_month',
    'price',
    'subscription',
    'status',
  ];

  dataSource = new MatTableDataSource<Plan>([]);

  loading = false;
  constructor(private PlanService: PlanService, public i18n: I18nService) {}

  ngOnInit(): void {
    this.loadUsers();
  }


  loadUsers(): void {
    this.loading = true;

    this.PlanService.getAllPlans().subscribe({
      next: (res) => {
        this.dataSource.data = res.data.map((u: Plan) => ({
          // id: u.id,
          name: u.name,
          description: u.description,
          emails_per_month: u.emails_per_month,
          price: u.price,
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

    toggleStatus(plan: Plan): void {
      console.log('Toggle status', plan);
    }

    editUser(plan: Plan): void {
      console.log('Edit organization', plan);
    }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}