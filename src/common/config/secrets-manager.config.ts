import { registerAs } from '@nestjs/config';

export default registerAs('secrectsManager', () => ({
  gcp: {
    id: process.env.PROJECT_ID,
    secretName: process.env.SECRETS_MANAGER_NAME,
  },
}));
