export interface Organization {
    id: number;
    name: string;
    email: string;
    type: string;
    max_users: number;
    owner_user_id: number;
    is_active: boolean;
}