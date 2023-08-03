import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ArticleController } from './article/article.controller';
import { ArticleModule } from './article/article.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [ConfigModule.register(), ArticleModule, RegisterModule, LoginModule],
  controllers: [AppController, ArticleController],
  providers: [AppService],
})
export class AppModule {}
