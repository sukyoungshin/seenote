import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany({
      where: { isDelete: false },
    });
  }

  async create(data: CreateUserDto) {
    const [user] = await this.prisma.$transaction(async (tx) => {
      // 1. 임시 시스템 유저(id: 1)로 createdBy/updatedBy 설정 후 생성
      const user = await tx.user.create({
        data: {
          email: data.email,
          name: data.name,
          nickname: data.nickname,
          password: data.password,
          role: data.role as Role,
          createdBy: {
            connect: { id: 1 },
          },
          updatedBy: {
            connect: { id: 1 },
          },
        },
      });

      // 2. 자기 자신을 createdBy/updatedBy로 다시 연결
      await tx.user.update({
        where: { id: user.id },
        data: {
          createdBy: {
            connect: { id: user.id },
          },
          updatedBy: {
            connect: { id: user.id },
          },
        },
      });

      return [user];
    });

    return user;
  }
}
