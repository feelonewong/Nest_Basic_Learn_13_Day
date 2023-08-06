import { registerAs } from '@nestjs/config';

export default registerAs('baseAlloc', () => ({
  host: '3306',
  url: 'localhost',
}));
