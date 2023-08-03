import { Global, Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ConfigModule } from '../config/config.module';

@Global()
@Module({
  imports: [ConfigModule.register()],
  providers: [ArticleService],
  exports: [ArticleService],
})
export class ArticleModule {}
