/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/Update-user.dto';
import { UserService } from '../user.service';
import { FindUserUseCase } from './find_user';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userService: UserService, private readonly findUserUseCase: FindUserUseCase) {}

  async execute(id: string, data: UpdateUserDto) {
    try {

        const user = this.findUserUseCase.execute(id)
        if (!user) {
            return {'message': 'user not found'}            
        }
        await this.userService.update(Number(id), data)
        return {'message': 'User updated successfully'}
        
    } catch (error) {
        console.error(error)
        return {'message': 'Failed to update the user'}
    }
  }
}
