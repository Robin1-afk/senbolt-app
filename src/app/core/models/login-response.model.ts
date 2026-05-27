export interface LoginResponse {
  status: string;
  message: string;
  data: {
    access_token: string;
    refresh_token: string;
    expires_at: string;
    rol_id: number;
    email: string;
  };
}