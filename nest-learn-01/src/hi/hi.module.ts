import { Module } from '@nestjs/common'
import { HiService } from './hi.service'
import { HiController } from './hi.controller'

@Module({
  providers: [HiService],
  controllers: [HiController],
  exports: [HiService],
})
export class HiModule {}
