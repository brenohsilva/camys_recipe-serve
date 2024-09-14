/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SignInUserUseCase } from 'src/users/use_cases/sign_in_user';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/user.service';
import { PrismaService } from 'src/prisma.service';
import { LoginUseCase } from './use_cases/login';
import { FindUserByUserNameUseCase } from 'src/users/use_cases/find_user_by_username';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '2h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService, SignInUserUseCase, LoginUseCase, JwtService, FindUserByUserNameUseCase]
})
export class AuthModule {}
