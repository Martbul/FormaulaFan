import { ForbiddenException, Injectable } from '@nestjs/common';
import { UpdateAuthInput } from './dto/update-auth.input';
import { SignUpInput } from './dto/signup-input';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as argon from 'argon2';
import { SignInInput } from './dto/signin-input';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signUp(signUpInput: SignUpInput) {
    const hashedPassword = await argon.hash(signUpInput.password);
    try {
      const newUser = await this.prisma.user.create({
        data: {
          username: signUpInput.username,
          email: signUpInput.email,
          password: hashedPassword,
        },
      });

      const { accessToken, refreshToken } = await this.createTokens(
        newUser.id,
        newUser.email,
      );
      await this.updateRefreshToken(newUser.id, refreshToken);
      return { accessToken, refreshToken, user: newUser };
    } catch (error) {
      //   if (error instanceof PrismaClientKnownRequestError) {
      //     if (error.code === 'P2002' && error.meta.target.includes('email')) {
      //       throw new Error('Email already exists');
      //     }
      //   }
      //   throw new Error('Internal server error');
      // }
      throw new Error("suuuuuuuuu")
    }
  }

  async signIn(signInInput: SignInInput) {
    const user = await this.prisma.user.findUnique({
      where: { email: signInInput.email },
    });
    if (!user) {
      throw new ForbiddenException('Wrong email or password');
    }

    const doPasswordsMatch = await argon.verify(
      user.password,
      signInInput.password,
    );
    if (!doPasswordsMatch) {
      throw new ForbiddenException('Wrong email or password');
    }

    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.email,
    );
    await this.updateRefreshToken(user.id, refreshToken);

    return { accessToken, refreshToken, user };
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async createTokens(userId: string, email: string) {
    const accessToken = this.jwtService.sign(
      { userId, email },
      { expiresIn: '3000s', secret: this.configService.get('JWT_SECRET') },
    );
    const refreshToken = this.jwtService.sign(
      { userId, email, accessToken },
      { expiresIn: '7d', secret: this.configService.get('JWT_SECRET') },
    );
    return { accessToken, refreshToken };
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await argon.hash(refreshToken);
    await this.prisma.user.update({
      where: { id: userId },
      data: { hashedRefreshToken: hashedRefreshToken },
    });
  }
}
