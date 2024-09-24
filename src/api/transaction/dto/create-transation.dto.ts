import {
  IsIn,
  IsNotEmpty,
  IsNumberString,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateTransationDto {
  @IsNumberString()
  @IsNotEmpty()
  value: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['debit_card', 'credit_card'], {
    message: 'method must be debit_card or credit_card',
  })
  method: 'debit_card' | 'credit_card';

  @IsString()
  @Length(4, 4)
  @IsNotEmpty()
  cardNumber: string;

  @IsString()
  @IsNotEmpty()
  cardHolderName: string;

  @IsString()
  @Matches(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: 'cardExpirationDate date must be in the format MM/YY',
  })
  @IsNotEmpty()
  cardExpirationDate: string;

  @IsString()
  @Length(3, 3)
  @IsNotEmpty()
  cardCvv: string;

  @IsString()
  @IsNotEmpty()
  merchantCode: string;
}
