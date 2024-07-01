/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../user.service';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(data: CreateUserDto) {
    try {
      const password = encodePassword(data.password)
        const user = {...data, password}
        const response = await this.userService.create(user)
        return response.id
    } catch (error) {
        console.error( "Estamos com problemas", error)
        return {'message':'Failed to create the user'}
    }
  }
}
