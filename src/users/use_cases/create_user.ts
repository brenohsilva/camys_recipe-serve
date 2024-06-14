/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../user.service';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(data: CreateUserDto) {
    try {
        const user = await this.userService.create(data)
        return user
    } catch (error) {
        console.error( "Estamos com problemas", error)
        return {'message':'Failed to create the user'}
    }
  }
}
