import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EnvironmentDto {
  @IsString()
  @IsOptional()
  APPLICATION_NAME: string;

  @IsString()
  @IsNotEmpty()
  NODE_ENV: string;

  @IsString()
  @IsNotEmpty()
  TIENDA_NUBE_TRANSATION_API_URL: string;

  @IsString()
  @IsNotEmpty()
  TIENDA_NUBE_RECEIVABLE_API_URL: string;
}
