import express, { Express } from 'express';
import rootRouter from '@redStore/routes';
import { engine } from 'express-handlebars';
import path from 'path';
import myDataSource from '@redStore/app/database';

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
  app.engine('handlebars', engine({
    extname: '.hbs',
    encoding: 'utf-8',
  }));
  app.set('view engine', 'handlebars');
  app.set('views', path.join(__dirname, 'views'));
  // Connect database
  myDataSource
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
      rootRouter(app);
      app.listen(port, () => cb(app));
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
}

export default bootstrap;