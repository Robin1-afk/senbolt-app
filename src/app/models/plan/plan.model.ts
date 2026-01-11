export interface Plan {
  // id: number; // ID del plan
  name: string; // Nombre del plan
  description: string; // Descripción del plan
  emails_per_month: number; // Cantidad de emails por mes
  price: number; // Precio del plan
  is_active: boolean; // Indica si el plan esta activo
}
