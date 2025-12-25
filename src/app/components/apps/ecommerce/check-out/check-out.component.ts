import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent {

  ngOnInit(): void {
    // Select the backdrop element
    const backdrop = document.querySelector('[data-hs-overlay-backdrop-template]');
    if (backdrop) {
      // Remove the specific class
      backdrop.classList.remove('fixed', 'inset-0', 'z-50', 'bg-gray-900', 'bg-opacity-50', 'dark:bg-opacity-80');
    }

    // Enable scrolling for the body
    // const body = document.body;
    // if (body.classList.contains('overflow-hidden')) {
    //   body.classList.remove('overflow-hidden');
    // }
  }
 // Method to switch tabs
goToTab(tabId: string): void {
  // Hide all tab panes
  const tabPanes = document.querySelectorAll('.tab-pane');
  tabPanes.forEach((tabPane) => {
    tabPane.classList.remove('show', 'active');
    tabPane.classList.add('hidden');
  });

  // Find and show the selected tab pane
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add('show', 'active');
    selectedTab.classList.remove('hidden');
  } else {
    console.error(`Tab with ID "${tabId}" not found.`);
    return;
  }

  // Update active state for navigation buttons (tabs)
  const tabs = document.querySelectorAll('.nav-link');
  tabs.forEach((tab) => tab.classList.remove('active'));
  const associatedButton = document.querySelector(`[data-hs-tab="#${tabId}"]`);
  if (associatedButton) {
    associatedButton.classList.add('active');
  } else {
    console.error(`Navigation button for tab ID "${tabId}" not found.`);
  }
}
}