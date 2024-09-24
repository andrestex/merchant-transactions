import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReceivableDto {
  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  subtotal: string;

  @IsString()
  @IsNotEmpty()
  discount: string;

  @IsString()
  @IsNotEmpty()
  total: string;

  @IsString()
  @IsNotEmpty()
  merchantCode: string;

  @IsString()
  @IsNotEmpty()
  transactionId: string;
}
