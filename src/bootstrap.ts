import express, { Express } from 'express';
import rootRouter from '@redStore/routes';
import { engine } from 'express-handlebars';
import path from 'path';
import initDatabase from '@redStore/app/database';
import activeMenuMiddleware from '@redStore/middlewares/active-menu';

function bootstrap(port: number = 3000, cb: (app: Express) => void) {
  const app = express();
  // Serve static files
  app.use(express.static(path.join(__dirname, '../public')));
  // Common setting
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));
  // View template engine
  const handlebarEngine = engine({
    extname: '.hbs',
    encoding: 'utf-8',
  });
  app.engine('hbs', handlebarEngine);
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, 'views'));
  // Middleware
  app.use(activeMenuMiddleware);
  // Connect database
  initDatabase().then((database) => {
    database.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
      rootRouter(app);
      app.listen(port, () => cb(app));
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
  }).catch((error) => {
    console.error('System error, detail: ' + error);
  })
}

export default bootstrap;