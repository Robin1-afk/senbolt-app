export interface Subscription {
    id: number; // ID de la suscripción
    organization_id: number; // ID de la organización
    plan_id: number; // ID del plan
    start_date: string; // Fecha de inicio de la suscripción
    end_date: string; // Fecha de fin de la suscripción
    is_active: boolean; // Estado de la suscripción
}