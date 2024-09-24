import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { HealthResponseDto } from './dto/health-response.dto';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  @ApiOperation({ summary: 'Check that the server is running' })
  @ApiResponse({
    status: 200,
    description: 'Sucess',
    type: HealthResponseDto,
  })
  @Get()
  status(): HealthResponseDto {
    return { message: 'Running' };
  }
}
