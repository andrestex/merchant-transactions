import { ValidationError } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { EnvironmentDto } from '../dtos';

export function envValidate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentDto, config, {
    enableImplicitConversion: true,
  });
  const validationErrors: ValidationError[] = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (validationErrors.length > 0) {
    const message = Object.values(validationErrors[0].constraints);
    throw new Error(`${message[0]}`);
  }
  return validatedConfig;
}
