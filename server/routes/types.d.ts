import { Router } from 'express';

interface Route {
  url: string;
  route: Router;
}

interface Routes {
  [key: string]: Route;
}
