import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export const pipeValidation = (validationErrors: ValidationError[] = []) => {
  const message = Object.values(validationErrors[0].constraints);
  return new BadRequestException(message[0]);
};
