/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';

import { JwtToken } from 'src/utils/token';
import { JwtService } from '@nestjs/jwt';
import { comparePasswords } from 'src/utils/bcrypt';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UpdateUserPassUseCase {
  constructor(private readonly userService: UserService, private jwtService: JwtService) {}

  async execute(request: Request, passwordData: any) {
    try {
        const authorizationHeader = request.headers['authorization'];
        const accessToken = JwtToken(authorizationHeader);
        const user = await this.jwtService.decode(accessToken.trim());
        const userData = await this.userService.findOne(user.sub)
        const currentPassword = passwordData.current_password
        const matched = comparePasswords(currentPassword, userData.password)
        if (matched) {
            const encryptPassword = encodePassword(passwordData.new_password)
            const data = {"password": encryptPassword}
            const response = await this.userService.update(userData.id, data)
            if (!response) {
                return {'message': 'Failed to update the user'}
            }
            return {'message': 'User updated successfully'}
        }
        return {'message': 'Failed to update the user'}
        
    } catch (error) {
        console.error(error)
        return {'message': 'Failed to update the user'}
    }
  }
}
