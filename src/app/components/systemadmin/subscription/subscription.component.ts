import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { I18nService } from '../../../core/services/i18n.service';
import { SharedModule } from '../../../shared/shared.module';

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
  
}
