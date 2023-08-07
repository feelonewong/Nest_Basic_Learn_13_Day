import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ArticleService } from '../article/article.service';

@Controller('config')
export class ConfigController {
  constructor(
    private readonly configService: ConfigService,
    private readonly articleService: ArticleService,
  ) {}
  @Get()
  get() {
    return this.configService.get();
  }
  @Get('/call-category.ts')
  call() {
    return this.articleService.article();
  }
}
