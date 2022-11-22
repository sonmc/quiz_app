import { AuthDto } from './dto/auth.dto';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import moment from 'moment';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(username);

    return null;
  }

  async comparePassword(
    password: string,
    storePasswordHash: string,
  ): Promise<any> {
    return await bcrypt.compare(password, storePasswordHash);
  }

  async authentication(email: string, password: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);
    const check = await this.comparePassword(password, user[0].password);

    if (!user || !check) {
      return false;
    }

    return user;
  }

  async login(auth: AuthDto) {
    const payload: AuthDto = {
      name: auth.name,
      email: auth.email,
      id: auth.id
    };
    const expiresTime = 100;

    return {
      expiresIn: moment().add(expiresTime, 'days'),
      token: this.jwtService.sign(payload),
      auth,
    };
  }

  public getCookieForLogOut() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }
}
