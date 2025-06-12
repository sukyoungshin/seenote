import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany({
      where: { isDelete: false },
    });
  }

  findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const [user] = await this.prisma.$transaction(async (tx) => {
      // 1. 임시 시스템 유저(id: 1)로 createdBy/updatedBy 설정 후 생성
      const user = await tx.user.create({
        data: {
          email: data.email,
          name: data.name,
          nickname: data.nickname,
          password: hashedPassword,
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

  async update(id: number, data: UpdateUserDto) {
    const updateData = { ...data };

    // role enum 변환
    if (data.role) {
      updateData.role = data.role as Role;
    }
    // 비밀번호 변경 요청이 있다면 bcrypt 처리
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data: updateData as Prisma.UserUpdateInput,
    });
  }

  async deleteById(id: number) {
    return this.prisma.user.update({
      where: { id },
      data: { isDelete: true },
    });
  }
}
