export interface LoginResponse {
  message: string;
  data: {
    token: string;
    user: string;
    rol_id: number;
    id: number;
    expires_at: string;
  };
}