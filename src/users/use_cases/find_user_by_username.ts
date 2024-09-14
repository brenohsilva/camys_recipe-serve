/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';

@Injectable()
export class FindUserByUserNameUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(username: string) {
   
        const user = await this.userService.findOneByUserName(username)
        return user
    
  }
}
