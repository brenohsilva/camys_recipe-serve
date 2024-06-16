/* eslint-disable prettier/prettier */
export function JwtToken(authorizationHeader: string) {
    const token = authorizationHeader.split('Bearer')[1];
    return token;
  }