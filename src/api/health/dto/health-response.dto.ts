import { ApiProperty } from '@nestjs/swagger';

export class HealthResponseDto {
  @ApiProperty({
    description: 'Status service',
    example: 'Running',
  })
  message: string;
}
