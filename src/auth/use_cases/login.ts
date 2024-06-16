/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { SignInUserUseCase } from 'src/users/use_cases/sign_in_user';
import { comparePasswords } from 'src/utils/bcrypt';


@Injectable()
export class LoginUseCase {
  constructor(private readonly authService: AuthService, private findUser: SignInUserUseCase,) {}

  async execute(email: string, pass: string) {
    const user = await this.findUser.execute(email);
    const matched = comparePasswords(pass, user.password)
    if (!matched) {
        throw new UnauthorizedException();
    }
   return await this.authService.signIn(user.id, user.email)

  }
}
