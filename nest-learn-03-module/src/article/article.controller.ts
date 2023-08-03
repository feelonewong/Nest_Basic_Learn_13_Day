import { Controller, Get, Inject } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  constructor(@Inject('hd') private hd: any) {}
  @Get()
  get() {
    return this.hd;
  }
}
