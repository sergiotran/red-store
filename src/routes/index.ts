import mainRouter from './main.router';
import type { Express } from "express";

export default function rootRouter(app: Express) {
  app.use('/', mainRouter);
}