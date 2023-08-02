import { Module } from '@nestjs/common'
import { HelloService } from './hello.service'
import { HelloController } from './hello.controller'
import { HiModule } from '../hi/hi.module'

@Module({
  imports: [HiModule],
  providers: [HelloService],
  controllers: [HelloController],
})
export class HelloModule {}
