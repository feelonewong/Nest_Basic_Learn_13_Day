import { Inject } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import baseAlloc from './config/database';

export class AppService {
  constructor(
    private readonly config: ConfigService,
    @Inject(baseAlloc.KEY) private database: ConfigType<typeof baseAlloc>,
  ) {}
  getHello(): string {
    console.log(this.config.get('app.version'));
    console.log(this.config.get('aliyun.beta'));
    console.log(this.database.host);
    return this.config.get('APP_NAME');
  }
}
