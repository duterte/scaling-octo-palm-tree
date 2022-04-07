#### This are documentation related only to routes directory/folder

- All types definition was on types.d.ts

### How to create a route and use a route

1. create a file name it according to the name of the route
1. make sure to export an object with `{url, route}`
1. The `url` is the string representing the resource locator of the path
1. The `route` is the `express.Router()`

```js
// upload.ts

import express from 'express';
import { Route } from './types';

const router = express.Router();
const url = '/upload';

router.post('/', (req, res) => {
  return res.status(200).json('ok');
});

const upload: Route = {
  url: url,
  route: router,
};

export default upload;
```

1. import the exported object from the route file to the `index.ts` in this the same directory
1. Add it as one of the property of the constant variable name `ROUTES`

```js
import { Routes } from './types';
import upload from './upload';

const ROUTES: Routes = {
  upload: upload,
};

export default ROUTES;
```
