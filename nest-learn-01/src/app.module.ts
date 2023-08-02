import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HdService } from './hd/hd.service'
import { prodConfig } from '../config/prod.config'
import { HelloModule } from './hello/hello.module';
import { HiModule } from './hi/hi.module';

const env = 'prod'

@Module({
  imports: [HelloModule, HiModule],
  controllers: [AppController],
  providers: [
    AppService,
    //使用类注册服务的方式
    {
      provide: HdService,
      useClass: HdService,
    },
    {
      provide: 'appName',
      useValue: '我是通过provide注册的useValue',
    },
    {
      provide: 'configService',
      useValue: env === 'prod' ? prodConfig : 'dev',
    },
    {
      provide: 'DBService',
      useFactory: () => {
        return 'useFactory data'
      },
    },
  ],
})
export class AppModule {}
