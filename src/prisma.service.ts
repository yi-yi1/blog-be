import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // 当模块初始化时，自动连接数据库
  async onModuleInit() {
    await this.$connect();
  }
}