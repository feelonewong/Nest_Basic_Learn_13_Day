import { DynamicModule, Module } from '@nestjs/common';
import { ConfigController } from './config.controller';
import { ConfigService } from './config.service';

@Module({
  controllers: [ConfigController],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {
  static register(): DynamicModule {
    return {
      module: ConfigModule,
      providers: [{ provide: 'hd', useValue: '配置的值' }],
      exports: ['hd'],
    };
  }
}
