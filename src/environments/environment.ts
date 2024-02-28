import packageJson from '../../package.json';
import { Environment } from './environment.config';

export const environment: Environment = {
  production: true,
  title: 'healthy - production',
  version: 'v' + packageJson.version
};
