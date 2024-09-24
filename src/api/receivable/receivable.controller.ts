import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ReceivablesService } from './receivable.service';
import { CreateReceivableDto } from './dto';
import { IReceivable } from './interfaces';

@ApiTags('Receivable')
@Controller('receivables')
export class ReceivableController {
  constructor(private readonly receivablesService: ReceivablesService) {}

  @Get('')
  async getReceivables(): Promise<IReceivable[]> {
    return await this.receivablesService.getReceivables();
  }

  // @Get('')
  // async getAmountPerPeriod(@Query()): Promise<IReceivable[]> {
  //   return await this.receivablesService.getReceivables();
  // }

  @Get(':id')
  async getReceivable(@Param('id') id: string): Promise<IReceivable> {
    return await this.receivablesService.getReceivable(id);
  }

  @Post('')
  async createReceivable(
    @Body() req: CreateReceivableDto,
  ): Promise<IReceivable> {
    return await this.receivablesService.createReceivable(req);
  }
}
