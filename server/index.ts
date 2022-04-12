#!/usr/bin/node
import dontenv from 'dotenv';
import express from 'express';
import debug from 'debug';
import cluster from 'cluster';
import os from 'os';
import helmet from 'helmet';
import ip from 'public-ip';
import cookieParser from 'cookie-parser';
import { routes } from './modules';

dontenv.config();
const app = express();
const PORT: number = Number(process.env.PORT) || 8080;
const cpus = os.cpus().length;
const log = debug('http:server');
const internet = ip.v4();
if (!cluster.isWorker) {
	for (let i = 0; i < cpus; i++) {
		cluster.fork();
	}
	cluster.on('exit', () => {
		cluster.fork();
	});
} else {
	const server = app.listen(PORT);
	server.once('listening', async () => {
		log(`===========================================`);
		log(`server is running process id ${process.pid}`);
		log(`Local Machine: http://localhost:${PORT}`);
		log(`Internet: http://${await internet}:${PORT}`);
	});
	server.headersTimeout = 7200000;
	server.keepAliveTimeout = 60000;
	app.use(helmet({ contentSecurityPolicy: false }));
	app.use(cookieParser());
	app.use(express.json());
	routes(app);
}
