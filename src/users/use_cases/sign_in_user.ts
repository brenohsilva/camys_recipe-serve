/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';

@Injectable()
export class SignInUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(email: string) {
        const user = await this.userService.findOneByEmail(email)
        return user
  }
}
