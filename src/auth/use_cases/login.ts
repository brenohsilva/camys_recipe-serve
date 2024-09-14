/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { SignInUserUseCase } from 'src/users/use_cases/sign_in_user';
import { comparePasswords } from 'src/utils/bcrypt';
import { FindUserByUserNameUseCase } from 'src/users/use_cases/find_user_by_username';


@Injectable()
export class LoginUseCase {
  constructor(private readonly authService: AuthService, private findUser: SignInUserUseCase,  private findUserByUsername: FindUserByUserNameUseCase) {}

  async execute(login: string, pass: string) {
    const user = await this.findUser.execute(login);
    if (user) {
     
      const matched = comparePasswords(pass, user.password)
      if (!matched) {
          throw new UnauthorizedException();
      }
     return await this.authService.signIn(user.id, user.email)
    }

    const userUsername = await this.findUserByUsername.execute(login)
    if (userUsername) {
      
      const matched = comparePasswords(pass, userUsername.password)
      if (!matched) {
          throw new UnauthorizedException();
      }
     return await this.authService.signIn(userUsername.id, userUsername.email)
    }

  }
}
