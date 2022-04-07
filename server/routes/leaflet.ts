import express, { Request } from 'express';
import { Route } from './types';

const router = express.Router();
const url = '/leaflet';

router.get('/', (req, res) => {
	return res.status(200).json('ok');
});

const upload: Route = {
	url: url,
	route: router,
};

export default upload;
