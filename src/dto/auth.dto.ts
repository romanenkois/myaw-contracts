/** Sent by the client to authenticate. */
export interface LoginRequestDto {
  email: string;
  password: string;
}

/** Returned by the server after successful authentication. */
export interface LoginResponseDto {
  accessToken: string;
  refreshToken: string;
}
