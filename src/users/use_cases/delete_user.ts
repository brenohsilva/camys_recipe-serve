/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { FindUserUseCase } from './find_user';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userService: UserService, private readonly findUserUseCase: FindUserUseCase) {}

  
  async execute(id: string) {
    try {
        const user = this.findUserUseCase.execute(id)
        if (!user) {
            return {'message': 'user not found'}            
        }
        await this.userService.remove(Number(id))
        return {'message': 'user deleted successfully'}
          
    } catch (error) {
        console.error(error)
        return  {'message': 'Failed to delete the user'}
    }
  }
}
