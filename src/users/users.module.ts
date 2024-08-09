/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { CreateUserUseCase } from './use_cases/create_user';
import { UpdateUserUseCase } from './use_cases/update_user';
import { DeleteUserUseCase } from './use_cases/delete_user';
import { FindAllUsersUseCase } from './use_cases/findAll_users';
import { FindUserUseCase } from './use_cases/find_user';
import { FindMyProfileUseCase } from './use_cases/find_my_profile';
import { UpdateUserPassUseCase } from './use_cases/update_user_pass';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaService,
    UserService,
    CreateUserUseCase,
    UpdateUserUseCase,
    FindMyProfileUseCase,
    DeleteUserUseCase,
    FindAllUsersUseCase,
    FindUserUseCase,
    UpdateUserPassUseCase
  ],
})
export class UsersModule {}
