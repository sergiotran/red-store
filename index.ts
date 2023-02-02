import 'module-alias/register';
import bootstrap from '@redStore/bootstrap';
import Env from '@redStore/app/env';

const port = +(Env.getEnvironmentVariable('PORT') || 3000);

bootstrap(port, () => {
  console.log(`App is running on port ${port}`);
});
