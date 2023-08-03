import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  article() {
    return 'article service';
  }
}
