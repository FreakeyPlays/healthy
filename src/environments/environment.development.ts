import packageJson from '../../package.json';
import { Environment } from './environment.config';

export const environment: Environment = {
  production: false,
  title: 'healthy',
  version: 'v' + packageJson.version
};
