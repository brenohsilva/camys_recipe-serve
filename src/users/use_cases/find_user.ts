/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';

@Injectable()
export class FindUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(id: string) {
    try {
        const user = await this.userService.findOne(Number(id))
        return user
    } catch (error) {
        console.error(error)
        return 'Failed to find the user'
    }
  }
}
