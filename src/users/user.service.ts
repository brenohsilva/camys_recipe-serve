/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { users } from '@prisma/client';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<users[]> {
    const userResponse = this.prisma.users.findMany()
    return userResponse
  }

  findOne(id: number): Promise<users> {
    const userResponse = this.prisma.users.findFirst({
      where: {
        id
      }
    })

    return userResponse
  }

  async create(createUserDto: CreateUserDto): Promise<users> {
    const userResponse = await this.prisma.users.create({
      data: createUserDto,
    });

    return userResponse;
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<users> {
    const userResponse = this.prisma.users.update({
      where: {
        id
      },
      data: updateUserDto
    })

  return userResponse
}

  remove(id: number) {
    const userResponse = this.prisma.users.delete({
      where: {
        id
      }
    })
    
    return userResponse
    
  }
}
