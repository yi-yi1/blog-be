// src/posts/posts.service.ts
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '../prisma.service'; 

@Injectable()
export class PostsService {
  // 依赖注入 Prisma
  constructor(private prisma: PrismaService) {}

  // 1. 创建文章
  create(createPostDto: CreatePostDto) {
    // 相当于 INSERT INTO Post ...
    return this.prisma.post.create({
      data: createPostDto,
    });
  }

  // 2. 获取文章列表
  findAll() {
    // 相当于 SELECT * FROM Post ORDER BY createdAt DESC
    return this.prisma.post.findMany({
      orderBy: { createdAt: 'desc' }, // 按创建时间倒序排列
    });
  }

  // 3. 获取单篇文章详情
  findOne(id: number) {
    // 相当于 SELECT * FROM Post WHERE id = ?
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  // 4. 更新文章
  update(id: number, updatePostDto: UpdatePostDto) {
    // 相当于 UPDATE Post SET ... WHERE id = ?
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  // 5. 删除文章
  remove(id: number) {
    // 相当于 DELETE FROM Post WHERE id = ?
    return this.prisma.post.delete({
      where: { id },
    });
  }
}