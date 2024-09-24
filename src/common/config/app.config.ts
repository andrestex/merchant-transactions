import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.NODE_ENV,
  port: Number(process.env.PORT) || 3024,
  version: process.env.API_VERSION || 'v1',
  tiendaNubeTransactionUrl: process.env.TIENDA_NUBE_TRANSATION_API_URL,
  tiendaNubeReceivableUrl: process.env.TIENDA_NUBE_RECEIVABLE_API_URL,
  applicationName:
    process.env.APPLICATION_NAME || '/merchant-/njs-ms-merchant-transactions',
}));
