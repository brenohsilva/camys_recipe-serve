/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private readonly userService: UserService) {}

  async execute() {
    try {
        const user = await this.userService.findAll()
        return user
    } catch (error) {
        console.error(error)
        return 'Failed to find users'
    }
  }
}
