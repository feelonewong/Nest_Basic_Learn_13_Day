import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { RegisterModule } from '../register/register.module';

@Module({
  imports: [RegisterModule.forRoot('哈哈哈')],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
