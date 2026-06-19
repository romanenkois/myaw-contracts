export interface LoginCredentialsRequestDto {
  email: string;
  password: string;
}

export interface LoginCredentialsResponseDto {
  accessToken: string;
  refreshToken: string;
}
