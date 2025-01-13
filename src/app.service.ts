import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(protected appRepository: AppRepository) {}

  async getHello() {
    const res = await this.appRepository.createPost();
    return res;
  }
}
