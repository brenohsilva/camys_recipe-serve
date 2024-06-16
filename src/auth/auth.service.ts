/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInUserUseCase } from 'src/users/use_cases/sign_in_user';

@Injectable()
export class AuthService {
  constructor(
    private findUser: SignInUserUseCase,
    private jwtService: JwtService,
  ) {}

  async signIn(id: number, email: string): Promise<{ access_token: string }> {
    const payload = { sub: id, email: email };
    
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '2h'
      }),
    };
  }
}
