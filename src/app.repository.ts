import { Injectable } from '@nestjs/common';
import { PrismaService } from './prismaservice';

@Injectable()
export class AppRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPost() {
    const res = await this.prisma.post.create({
      data: {
        title: 'some title123',
      },
    });
    console.log(res);
    return res;
  }
}
