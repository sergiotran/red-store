import express, { Express } from 'express';
import rootRouter from '@redStore/routes';
import { engine } from 'express-handlebars';
import path from 'path';

function bootstrap(port: number = 3000, cb: (app: Express) => void) {
  const app = express();
  // Serve static files
  app.use(express.static(path.join(__dirname, '../public')));
  // View template engine
  app.engine('handlebars', engine({
    extname: '.hbs',
    encoding: 'utf-8',
  }));
  app.set('view engine', 'handlebars');
  app.set('views', path.join(__dirname, 'views'));
  // Routers
  rootRouter(app);
  // Listen
  app.listen(port, () => cb(app));
}

export default bootstrap;