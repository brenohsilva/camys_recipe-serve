/* eslint-disable prettier/prettier */
import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUseCase } from './use_cases/login';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private loginUseCase: LoginUseCase) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.loginUseCase.execute(signInDto.email, signInDto.password);
  }
}