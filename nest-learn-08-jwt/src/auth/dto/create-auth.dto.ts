import { IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  name: string;
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
  @IsNotEmpty({ message: '确认密码不能为空' })
  confirm_password: string;
}
