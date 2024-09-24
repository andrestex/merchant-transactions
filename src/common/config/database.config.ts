import { registerAs } from '@nestjs/config';

export default registerAs('postgresDb', () => ({
  host: process.env.HOST_DB_BACKEND,
  port: Number(process.env.PORT_DB_BACKEND) || 5432,
  username: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB_BACKEND,
}));
