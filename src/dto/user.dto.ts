export interface PrivateUserResponseDto {
  id: string;

  personalData: {
    displayName: string;
    profilePicture: string | null;
  }
}

export interface PublicUserResponseDto {
  id: string;

  personalData: {
    displayName: string;
    profilePicture: string | null;
  }
}
