/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JwtToken } from "src/utils/token";
import { FindUserUseCase } from "./find_user";

@Injectable()
export class FindMyProfileUseCase {
  constructor(private jwtService: JwtService, private readonly findUserUseCase: FindUserUseCase) {}

  async execute(request: Request): Promise<any> {
    const authorizationHeader = request.headers['authorization'];
    const accessToken = JwtToken(authorizationHeader);
    const user = await this.jwtService.decode(accessToken.trim());
    const response = this.findUserUseCase.execute(user.sub)
    return response;
  }
}