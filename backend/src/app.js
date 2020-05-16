import { server } from './server';
import './routes';
import './config/dbConnection';
import { environmentConfiguration } from './enviornment/environment.local';

const port = environmentConfiguration.PORT;
const hostIP = environmentConfiguration.HOST_IP;

export const appServer = server.listen(port, hostIP, () => {
  console.log(`Listening to port ${hostIP}`);
});