import { ApiProperty } from '@nestjs/swagger';

export class CommonErrorDto {
  @ApiProperty({
    description: 'Error message',
    example: 'error processing request',
  })
  message: string;

  @ApiProperty({
    description: 'Trace id',
  })
  traceID: string;
}
