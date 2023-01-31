import 'module-alias/register';
import bootstrap from '@redStore/bootstrap';
import { config } from 'dotenv';

config();
const port = +(process.env.PORT || 3000);

bootstrap(port, (app) => {
  console.log(`App is running on port ${port}`);
});
