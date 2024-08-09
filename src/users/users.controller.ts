/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Put,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserUseCase } from './use_cases/create_user';
import { UpdateUserUseCase } from './use_cases/update_user';
import { FindUserUseCase } from './use_cases/find_user';
import { FindAllUsersUseCase } from './use_cases/findAll_users';
import { DeleteUserUseCase } from './use_cases/delete_user';
import { AuthGuard } from 'src/auth/auth.guard';

import { FindMyProfileUseCase } from './use_cases/find_my_profile';
import { UpdateUserPassUseCase } from './use_cases/update_user_pass';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly findUserUseCase: FindUserUseCase,
    private readonly findAllUsersUseCase: FindAllUsersUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly findMyProfileUseCase: FindMyProfileUseCase,
    private readonly updateUserPasswordUseCase: UpdateUserPassUseCase
  ) {}

  
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.createUserUseCase.execute(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.findAllUsersUseCase.execute();
  }
  @UseGuards(AuthGuard)
  @Get('/profile')
  findMyProfile(@Req() request: Request){
    return this.findMyProfileUseCase.execute(request)
  }
  @UseGuards(AuthGuard)
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.findUserUseCase.execute(id);
  }

  @UseGuards(AuthGuard)
  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUserUseCase.execute(id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Put('/:id/pass')
  updatePassword(@Req() request: Request, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUserPasswordUseCase.execute(request, updateUserDto)
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.deleteUserUseCase.execute(id);
  }
}
