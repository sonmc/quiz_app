
import {
  Controller,
  Post,
  Request,
  Response,
  UseGuards,
} from "@nestjs/common";

import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/auth.guard";
import { LocalAuthGuard } from "./guards/local.guard";
import { UserService } from './../user/user.service';

@Controller("api/auth")
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }


  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@Request() request): Promise<any> {
    return this.authService.login(request.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post("/logout")
  async getUserLogout(@Response() response): Promise<Response> {
    response.setHeader("Set-Cookie", this.authService.getCookieForLogOut());
    response.clearCookie("access_token");
    response.clearCookie("token");
    return response.sendStatus(200);
  }

  async validate(email: string) {
    try {
      const users = await this.userService.getUserByEmail(email);
      return users.length <= 0;
    } catch (e) {
      return false;
    }
  }
}
