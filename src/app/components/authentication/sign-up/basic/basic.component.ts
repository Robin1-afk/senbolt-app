import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

type Step = 1 | 2 | 3 | 'success';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent implements OnInit, OnDestroy {

  step: Step = 1;
  step1!: FormGroup;
  step2!: FormGroup;

  plans: any[] = [];
  businessTypes: any[] = [];

  showPassword = false;
  errorMessage = '';
  successEmail = '';

  private readonly api = environment.apiUrl;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    document.body.classList.add('authentication-background');
  }

  ngOnInit(): void {
    this.step1 = this.fb.group({
      name:     ['', Validators.required],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone:    ['', Validators.required]
    });
    this.step2 = this.fb.group({
      clinicName:   ['', Validators.required],
      businessType: ['', Validators.required],
      city:         ['', Validators.required],
      planId:       [null, Validators.required]
    });
    this.loadCatalogs();
  }

  ngOnDestroy(): void {
    document.body.classList.remove('authentication-background');
  }

  private loadCatalogs(): void {
    this.http.get<any>(`${this.api}/public/catalog/plans`).subscribe({
      next: r => this.plans = r.data ?? []
    });
    this.http.get<any>(`${this.api}/public/catalog/businessTypes`).subscribe({
      next: r => this.businessTypes = r.data ?? []
    });
  }

  nextStep(): void {
    if (this.step1.invalid) { this.step1.markAllAsTouched(); return; }
    this.errorMessage = '';
    this.step = 2;
  }

  prevStep(): void {
    this.step = 1;
    this.errorMessage = '';
  }

  selectPlan(id: number): void {
    this.step2.patchValue({ planId: id });
  }

  submit(): void {
    if (this.step2.invalid) { this.step2.markAllAsTouched(); return; }
    this.errorMessage = '';
    this.step = 3;

    const payload = { ...this.step1.value, ...this.step2.value };

    this.http.post<any>(`${this.api}/public/register`, payload).subscribe({
      next: res => {
        const token = res.data?.token;
        setTimeout(() => {
          this.http.post<any>(`${this.api}/public/payment/simulate`, { token }).subscribe({
            next: () => {
              this.successEmail = payload.email;
              this.step = 'success';
            },
            error: err => {
              this.errorMessage = err.error?.message ?? 'Error al procesar el pago.';
              this.step = 2;
            }
          });
        }, 2000);
      },
      error: err => {
        this.errorMessage = err.error?.message ?? 'Error al guardar el registro.';
        this.step = 2;
      }
    });
  }

  goToLogin(): void {
    this.router.navigate(['/authentication/sign-in/basic']);
  }

  invalid(form: FormGroup, field: string): boolean {
    const c = form.get(field);
    return !!c && c.invalid && c.touched;
  }
}
