import { Injectable, Optional } from '@nestjs/common';
import { readdirSync } from 'fs';
import path from 'path';
import { ArticleService } from '../article/article.service';
@Injectable()
export class ConfigService {
  constructor(
    // @Optional() 主要是为了构造器的时候传值
    @Optional() private config = {},
    private readonly articleService: ArticleService,
  ) {
    const options = { path: path.resolve(__dirname, '../configure') };
    readdirSync(options.path).map(async (file) => {
      if (file.slice(-2) === 'js') {
        const module = await import(path.resolve(options.path, file));
        this.config = { ...this.config, ...module.default().config };
      }
    });
  }
  get() {
    return this.config;
  }
  callArticle() {
    return this.articleService.article();
  }
}
