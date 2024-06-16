/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class FindUserByTokenUseCase {
  constructor(private jwtService: JwtService) {}

  async execute(access_token: string): Promise<any> {
    const user = await this.jwtService.decode(access_token.trim());
    return user;
  }
}