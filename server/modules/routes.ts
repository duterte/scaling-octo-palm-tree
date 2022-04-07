import express, { Express } from 'express';
import path from 'path';
import ROUTES from '../routes';

// this module is supposed to be close for modification
// please dont modify, route modules is totally reliant on this module
// modifying this will results on routes not working

export default function routes(app: Express) {
  for (const key in ROUTES) {
    app.use(ROUTES[key].url, ROUTES[key].route);
  }
  app.use(express.static(path.resolve('public')));
}
